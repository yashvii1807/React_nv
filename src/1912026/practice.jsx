//create a class based component named display123
//create a state variable with 50 records
//implement pagination logic to show 5 records per page
//add buttons to navigate to next and previous page
//display current page number abd total page
//when user is on first page, disable previous button
//when user is on last page, disable next button        
//records (array) ,current page (number), recordsperpage (number)]
//totalpage(number), displayedRecords(array)

import React, { Component } from "react";

class Display123 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        records: [
            p1="value1",
            p2="value2",
            p3="value3",
            p4="value4",
            p5="value5",
            "text1",
            "text2",
            "text3",
            "text4",
            "text5",
            "text6",
            "text7",
            "text8",
            "text9",
            "text10",
            "text11",
            "text12",
            "text13",
            "text14",
            "text15",
            "text16",
            "text17",
            "text18",
            "text19",
            "text20",   
            "text21",
            "text22",
            "text23",
            "text24",
            "text25",
            "text26",
            "text27",
            "text28",
            "text29",
            "text30",   
            "text31",
            "text32",
            "text33", 
            "text34",
            "text35",       
            "text36",
            "text37",
            "text38",
            "text39",
            "text40",
        ],
     
        currentPage: 1,
        recordsPerPage: 5,
    };
    this.totalPages = Math.ceil(this.state.records.length / this.state.recordsPerPage);
    
  }
}

export default Display123;