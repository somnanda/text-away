import tablib
from random import randint
import pyexcel as p
import itertools
import random
import time
import datetime
from collections import OrderedDict

# pip install pyexcel pyexcel-xls pyexcel-xlsx

def generate_data(upper_limit):
    headers = ('Investor Name', 'Investor Id')
    txn_headers = ('Investor Name', 'Investor Id', 'GL Date', 'Effective Date','Amount')
    # data = [('Investor ' + str(randint(0, 99999)), str(randint(0, 99999))) for _ in range(10)]
    
    data = []
    txn_data = []
    merged = []
    for i in range(upper_limit):
        num = i+1
        data.append(('Investor ' + str(num), num))
        for j in range(upper_limit * 200):
            amount = randint(1, 99999)
            txn_data.append(('Investor ' + str(num), num, randomDate("1/1/2017", "9/1/2017", random.random()), randomDate("1/1/2017", "9/1/2017", random.random()), amount))
        
    dataset = list(OrderedDict.fromkeys(data))
    txn_dataset = list(OrderedDict.fromkeys(txn_data))
    

    for x in txn_dataset:
        print x[0], x[2] 

    rawdata = tablib.Dataset(*dataset, headers=headers, title='Sheet1')
    txn_rawdata = tablib.Dataset(*txn_dataset, headers=txn_headers, title='Sheet1')

    # with open('Inv_10.xls', 'wb') as f:
    #     f.write(rawdata.export('xls'))
    
    # p.save_book_as(file_name='Inv_10.xls', dest_file_name='Inv_10.xlsx')

    # with open('Txn_Random_20k.xls', 'wb') as f:
    #     f.write(txn_rawdata.export('xls'))

    # p.save_book_as(file_name='Txn_Random_20k.xls', dest_file_name='Txn_Random_20k.xlsx')


def strTimeProp(start, end, format, prop):
    """Get a time at a proportion of a range of two formatted times.

    start and end should be strings specifying times formated in the
    given format (strftime-style), giving an interval [start, end].
    prop specifies how a proportion of the interval to be taken after
    start.  The returned time will be in the specified format.
    """

    stime = time.mktime(time.strptime(start, format))
    etime = time.mktime(time.strptime(end, format))

    ptime = stime + prop * (etime - stime)
    return time.strftime(format, time.localtime(ptime))


def randomDate(start, end, prop):
    return strTimeProp(start, end, '%m/%d/%Y', prop)

if __name__ == '__main__':
    generate_data(1)

