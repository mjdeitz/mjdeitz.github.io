"use strict";

// const { Account } = require("./account.js");
// const { CheckingAccount } = require("./checkingaccount.js");
// const { SavingsAccount } = require("./savingsaccount.js");

/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount;

/*
Next create a Bankclass, a Bank object should have an array of Account objects, 
and have addAccount(), addSavingsAccount(interest), addCheckingAccount(overdraft)
methods each of which returns the number of the created account. Also add a close
Account(number)method that closes (removes from the array) the account with that 
number, and a accountReport()method that returns a String with each account on 
its own line. Use a static nextNumbervariable on the Bank class to know what the 
number for the next account will be. Test with bankTests.js. 
*/


/**
 * A Bank class
 * 
 * Provides the basic functionality that every account should have
 */
class Bank {

    /**
     * Constructor for creating a new Bank object
     * 
     * @param {number} number the number for this account
     */
    constructor() {
        this._accounts = []; // array of account objects

    }

    static nextNumber = 1;

    addAccount() {

        let accountNumber = Bank.nextNumber;

        Bank.nextNumber = Bank.nextNumber + 1;

        this._accounts.push(new Account(accountNumber));

        return accountNumber;
    }

    addSavingsAccount(interest) {
        let accountNumber = Bank.nextNumber;
        Bank.nextNumber = Bank.nextNumber + 1;

        this._accounts.push(new SavingsAccount(accountNumber, interest));
        return accountNumber;
    }

    addCheckingAccount(overdraft) {
        let accountNumber = Bank.nextNumber;
        Bank.nextNumber = Bank.nextNumber + 1;

        this._accounts.push(new CheckingAccount(accountNumber, overdraft));
        return accountNumber;
    }

    closeAccount(number) {
        let index = number - 1;
        if (number === 1) {
            this._accounts.splice(0, 1);
        } else {
            this._accounts.splice(index, index);
        }

    }

    accountReport() {
        return this._accounts[0].toString() + "\n" + this._accounts[1].toString();
    }

    // bank._accounts[0].deposit(100);
    // bank._accounts[1].withdraw(100);
    // bank.addAccount();
    // assert.equal(bank.endOfMonth(), "Interest added SavingsAccount 2: balance: 102.5 interest: 2.5\n
    // Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500\n");
    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
    endOfMonth() {

        return this._accounts[0].endOfMonth() + "\n" + this._accounts[1].endOfMonth(); // does nothing
    }

}



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// exports.Bank = Bank;









