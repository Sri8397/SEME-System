import json
import datetime

def add_data(): 
    reg = input('Reg. No.: ')
    name = input('Owner Name: ')
    type = input('Vehicle Type: ')

    t1 = datetime.datetime.now()

    time_in_minutes = input('Total required time (min): ')
    flag = False
    while flag == False:
        try: 
            time_in_second = int(time_in_minutes) * 60
            flag = True
        except Exception as e: 
            print(e)
            time_in_minutes = input('Enter correct time: ')

    entry_date = (t1.strftime('%a %d/%m/%Y'))
    entry_time = (t1.strftime('%H:%M:%S'))
    inside = True

    obj = {
        "name": name,
        "reg no": reg,
        "vehicle type": type,
        "frequency": 1, 
        "entry": {
            "date": entry_date,
            "time": entry_time
        },
        "exit": {
            "exit date": None,
            "exit time": None
        },
        "allocated time": time_in_second,
        "remaining time": time_in_second,
        "inside": inside,
        "fault": False
    }
    
    path = 'json-files/main-memory.json'
    with open(path, 'r') as getData:
        getData = getData.read()
        data = json.loads(getData)
        data[reg] = obj
        with open(path, 'w') as write:
            json.dump(data, write)

add_data()
