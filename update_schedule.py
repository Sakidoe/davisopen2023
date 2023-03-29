import sys

import os
import pandas as pd
import openpyxl as ox
import styleframe as sf
import json
import re

# Update this if more days
days = [("saturday.txt", "saturday"), ("sunday.txt", "sunday")]

sheet_names = {"Saturday 01 Apr 2023": "saturday", "Sunday 02 Apr 2023": "sunday"}

# Update this if different events
event_name_conversions = {
    "A Men's Singles": "AMS",
    "B Men's Singles": "BMS",
    "C Men's Singles": "CMS",
    "D Men's Singles": "DMS",
    "A Women's Singles": "AWS",
    "B Women's Singles": "BWS",
    "C Women's Singles": "CWS",
    "D Women's Singles": "DWS",
    "A Men's Doubles": "AMD",
    "B Men's Doubles": "BMD",
    "C Men's Doubles": "CMD",
    "D Men's Doubles": "DMD",
    #"WD A/B": "ABWD",
    "A/B Women's Doubles": "ABWD",
    "C Women's Doubles": "CWD",
    "D Women's Doubles": "DWD",
    "A Mixed Doubles": "AXD",
    "B Mixed Doubles": "BXD",
    "C Mixed Doubles": "CXD",
    "D Mixed Doubles": "DXD",
}


def parse_tournament_matches(file):
    matches_data = {}

    wb = ox.load_workbook(file)
    for ws in wb.worksheets:
        ws.delete_rows(1, 3)
        wb.save("temp.xlsx")

    # Override the data with styleframes
    for sheet_name in sheet_names:
        actual_name = sheet_names[sheet_name]
        matches_data[actual_name] = sf.read_excel("temp.xlsx", sheet_name=sheet_name, read_style=True, use_openpyxl_styles=False)
    
    os.remove("temp.xlsx")
    
    parsed_matches = {}

    for day in matches_data:
        parsed_matches[day] = {}
        parsed_matches_data = parsed_matches[day]
        for i in range(len(matches_data[day])):
            style_row = matches_data[day].iloc[i]
            row = matches_data[day].iloc[i].copy()
            for j in range(len(row)):
                row[j] = row[j].value
            event = event_name_conversions[row["Event"]]
            if event not in parsed_matches_data:
                parsed_matches_data[event] = {}
            if "Winner" in row["Team 1"] or "Loser" in row["Team 1"]:
                team_1_split = row["Team 1"].split("-")
                row["Team 1"] = team_1_split[0]
            if "Winner" in row["Team 2"] or "Loser" in row["Team 2"]:
                team_2_split = row["Team 2"].split("-")
                row["Team 2"] = team_2_split[0]
            winner = ""
            if row["Score"] is None or pd.isnull(row["Score"]):
                if style_row["Team 1"].style.bold:
                    row["Score"] = "No Score"
                    winner = row["Team 1"]
                elif style_row["Team 2"].style.bold:
                    row["Score"] = "No Score"
                    winner = row["Team 2"]
                else:
                    row["Score"] = "Match Not Started"
            else:
                if style_row["Team 1"].style.bold:
                    winner = row["Team 1"]
                elif style_row["Team 2"].style.bold:
                    winner = row["Team 2"]

            parsed_matches_data[event][row["Nr"]] = [row["Round"],
                                                     row["Team 1"] + " vs. " + row["Team 2"],
                                                     row["Score"],
                                                     winner]
    # Adjust this if different days
    new_matches_info = {"saturday": [], "sunday": []}
    for d in days:
        with open(d[0], "r") as f:
            # First line is useless
            first = True
            for match in f.readlines():
                day = d[1]
                if first:
                    first = False
                    continue
                match_info = match.split("|")
                event = re.sub(r'\d+', '', match_info[1]).strip()
                match_number = int(re.findall(r'\d+', match_info[1])[0])
                current_events = parsed_matches[d[1].lower()][event]
                if match_number not in current_events:
                    continue
                match_data = current_events[match_number]
                new_match_data = [match_info[0].strip(),
                                  match_info[1].strip(),
                                  match_data[0].strip(),
                                  match_data[1].strip(),
                                  match_data[2],
                                  match_data[3].strip()]
                new_matches_info[day].append(new_match_data)

    return new_matches_info


def main():
    if len(sys.argv) != 2:
        print("Invalid arguments!")
        return

    parsed_match_info = parse_tournament_matches(sys.argv[1])

    with open("matchSchedule.json", "w", encoding='utf-8') as f:
        json.dump(parsed_match_info, f, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    main()
