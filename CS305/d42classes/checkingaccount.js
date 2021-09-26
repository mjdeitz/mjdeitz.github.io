"use strict";
/* global Account  */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


/**
 * A Bank SavingsAccount class
 * 
 * Provides the basic functionality that every savingsaccount should have
 */
class CheckingAccount extends Account {
    /**
     * Constructor for creating a new CheckingAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} overdraft overdraft amount
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     * Getter for the 'private' get overdraft field
     * 
     * @returns {number} the overdraft rate
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Setter for the 'private' set overdraft field
     * @param {number} overdraft rate
     * @returns {undefined} 
     */
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }


    /**
     * 
     * @param {Number} amount withdraw amount
     * @returns {undefined} 
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft)) {
            throw new Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }

        this._balance -= amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraft;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {String} string saying interest was added
     */
    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraft;
        } else {
            return "";
        }
    }
}








/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
// exports.CheckingAccount = CheckingAccount;