from csv import writer
import datetime
import pandas as pd

data_to_append = []
data_to_append.append(input('Reg. No.: '))
data_to_append.append(input('Owner Name: '))
data_to_append.append(input('Vehicle Type: '))

t1 = datetime.datetime.now()
time_in_second = int(input('Total required time (min): ')) * 60
t2 = t1 + datetime.timedelta(seconds=time_in_second)

data_to_append.append(t1.strftime('%a %d/%m/%Y'))
data_to_append.append(t1.strftime('%H:%M:%S'))
data_to_append.append(t2.strftime('%H:%M:%S'))
data_to_append.append('N')

with open('main-memory.csv', 'a') as f_object:
	writer_object = writer(f_object)
	writer_object.writerow(data_to_append)
	f_object.close()
