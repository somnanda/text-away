import tablib
from random import randint
import pyexcel as p
import itertools
import random
import time
import datetime
import xlsxwriter
from collections import OrderedDict

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

    rawdata = tablib.Dataset(*dataset, headers=headers, title='Sheet1')
    txn_rawdata = tablib.Dataset(*txn_dataset, headers=txn_headers, title='Sheet1')

    with open('Inv_10.xls', 'wb') as f:
        f.write(rawdata.export('xls'))
    
    p.save_book_as(file_name='Inv_10.xls', dest_file_name='Inv_10.xlsx')

    with open('Txn_Random_20k.xls', 'wb') as f:
        f.write(txn_rawdata.export('xls'))

    p.save_book_as(file_name='Txn_Random_20k.xls', dest_file_name='Txn_Random_20k.xlsx')


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


def generate_terms_data(upper_limit):
    # Create a workbook and add a worksheet.
    workbook = xlsxwriter.Workbook('investor_terms.xlsx')
    worksheet = workbook.add_worksheet()

    # Write some data headers.
    worksheet.write('A1', 'Investor Name')
    worksheet.write('B1', 'Investor Id')
    worksheet.write('C1', 'Investor Type')
    worksheet.write('D1', 'Preferred Return (% to LP)')
    worksheet.write('E1', 'Preferred Allocation (% to CIP)')
    worksheet.write('F1', 'Catch-Up Allocation (% to CIP)')
    worksheet.write('G1', 'Catch-Up Target (% to CIP)')
    worksheet.write('H1', 'Final Split (% to CIP)')

    # Start from the first cell below the headers.
    row = 1
    col = 0

    terms_data = []
    investor_type_list = ['LP', 'CIP']
    for i in range(upper_limit):
        num = i+1
        terms_data.append(('Investor ' + str(num), str(num), random.choice(investor_type_list), '0.01', '0', '0.01', '0.01', '0.01'))
        
    terms_dataset = list(OrderedDict.fromkeys(terms_data))

    for x in terms_dataset:
        worksheet.write_string(row, col, x[0])
        worksheet.write_string(row, col + 1, x[1])
        worksheet.write_string(row, col + 2, x[2])
        worksheet.write_string(row, col + 3, x[3])
        worksheet.write_string(row, col + 4, x[4])
        worksheet.write_string(row, col + 5, x[5])
        worksheet.write_string(row, col + 6, x[6])
        worksheet.write_string(row, col + 7, x[7])
        row += 1

    workbook.close()


def generate_contributions_data(upper_limit, no_of_investors):

    transactions_per_investor = upper_limit / no_of_investors

    # Create a workbook and add a worksheet.
    workbook = xlsxwriter.Workbook('contributions.xlsx')
    worksheet = workbook.add_worksheet()

    # Write some data headers.
    worksheet.write('A1', 'Investor Name')
    worksheet.write('B1', 'Investor Id')
    worksheet.write('C1', 'Transaction Id')
    worksheet.write('D1', 'Deal Name')
    worksheet.write('E1', 'Deal Id')
    worksheet.write('F1', 'Transaction Type')
    worksheet.write('G1', 'Amount')
    worksheet.write('H1', 'Effective Date')
    worksheet.write('I1', 'GL Date')

    # Start from the first cell below the headers.
    row = 1
    col = 0

    transactions_data = []
    random_date_list = ['2018-07-18', '2018-12-31', '2017-11-15', '2017-07-20']
    for i in range(no_of_investors):
        num = i+1
        for j in range(transactions_per_investor):
            randomdate = random.choice(random_date_list)
            transactions_data.append(('Investor ' + str(num), str(num), randomdate + '_' + str(num) + str(randint(1, 999999)), '', '', '', str(randint(1, 99999)), randomdate, randomdate))
        
    transactions_dataset = list(OrderedDict.fromkeys(transactions_data))

    for x in transactions_dataset:
        worksheet.write_string(row, col, x[0])
        worksheet.write_string(row, col + 1, x[1])
        worksheet.write_string(row, col + 2, x[2])
        worksheet.write_string(row, col + 3, x[3])
        worksheet.write_string(row, col + 4, x[4])
        worksheet.write_string(row, col + 5, x[5])
        worksheet.write_string(row, col + 6, x[6])
        worksheet.write_string(row, col + 7, x[7])
        worksheet.write_string(row, col + 8, x[8])
        row += 1

    workbook.close()



if __name__ == '__main__':
    # Run with 'python utilities/xlsx_file_generator.py'
    ###########################################
    # generate_terms_data(50000)
    ###########################################
    generate_contributions_data(400000, 18)
    ###########################################

