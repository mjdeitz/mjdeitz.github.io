
"use strict";
/* global Account require  */
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * A Bank SavingsAccount class
 * 
 * Provides the basic functionality that every savingsaccount should have
 */
class SavingsAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} interest percent interest
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    /**
     * Getter for the 'private' get interest field
     * 
     * @returns {number} the interest rate
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the 'private' set interest field
     * @param {number} interest rate
     * @returns {undefined} 
     */
    setInterest(interest) {
        this._interest = interest;
    }

    /**
     * 
     * @param {number} rate interest rate 
     * @returns {undefined}
     */
    addInterest() {
        let amount = this._balance * this._interest / 100;
        this.deposit(amount);
    }


    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns {String} string saying interest was added
     */
    endOfMonth() {
        return "Interest added SavingsAccount " + savings.getNumber() + ": balance: " + savings._balance + " interest: " + savings._interest;
    }
}





/* global exports */
// exports.SavingsAccount = SavingsAccount;