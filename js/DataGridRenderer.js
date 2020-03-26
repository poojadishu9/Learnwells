

var DataGridRenderer = {
  
  
  //---------------------------------------
  // XML - Tally
  //---------------------------------------
  xml: function (dataGrid, headerNames, headerTypes, indent, newLine) {
    //inits...
    var commentLine = "<!--";
    var commentLineEnd = "-->";
    var outputText = "";
    var numRows = dataGrid.length;
    var numColumns = headerNames.length;
    
    //begin render loop
    outputText = '<?xml version="1.0" encoding="UTF-8"?>' + newLine;
	outputText += "<ENVELOPE>"+newLine;
	outputText += "<HEADER>"+newLine;
	outputText += "<TALLYREQUEST>Import Data</TALLYREQUEST>"+newLine;
	outputText += "</HEADER>"+newLine;
	outputText += "<BODY>"+newLine;
	outputText += "<IMPORTDATA>"+newLine;
	outputText += "<REQUESTDESC>"+newLine;
	outputText += "<REPORTNAME>Vouchers</REPORTNAME>"+newLine;
	outputText += "<STATICVARIABLES>"+newLine;
    outputText += "<SVCURRENTCOMPANY>LearnWell</SVCURRENTCOMPANY>"+newLine;
	outputText += "</STATICVARIABLES>"+newLine;
	outputText += "</REQUESTDESC>"+newLine;
	outputText += "<REQUESTDATA>"+newLine;
    for (var i=0; i < numRows;i++) {
      var row = dataGrid[i];
	  outputText += indent+'<TALLYMESSAGE xmlns:UDF="TallyUDF">'+newLine;
	  outputText += indent+'<VOUCHER REMOTEID="" VCHTYPE="Sales" ACTION="Create">'+newLine;
	  outputText += indent+"<VOUCHERTYPENAME>Sales</VOUCHERTYPENAME>"+newLine;
	  outputText += indent+"<GUID></GUID>"+newLine;
	  outputText += indent+"<ALTERID></ALTERID>"+newLine;
		outputText += indent+"<DATE>";          
        outputText += row[i] || ""
        outputText += "</DATE>"+newLine;
		outputText += indent+"<EFFECTIVEDATE>";          
        outputText += row[i] || ""
        outputText += "</EFFECTIVEDATE>"+newLine;
		outputText += indent+"<NARRATION>";          
        outputText += row[i+1] || ""
        outputText += "</NARRATION>"+newLine;
        outputText += indent+"<ALLLEDGERENTRIES.LIST>"+newLine;
      for (var j=0; j < numColumns; j++) {
        outputText += indent+indent+'<'+headerNames[j]+'>';          
        outputText += row[j] || ""
        outputText += '</'+headerNames[j]+'>'+newLine
      };
      outputText += indent+"</ALLLEDGERENTRIES.LIST>"+newLine;
    };
    outputText += "</rows>";
    
    return outputText;
    
  },
  
  
  
 
  
  //---------------------------------------
  // XML Illustrator
  //---------------------------------------
  xmlIllustrator: function (dataGrid, headerNames, headerTypes, indent, newLine) {
    //inits...
    var commentLine = "<!--";
    var commentLineEnd = "-->";
    var outputText = "";
    var numRows = dataGrid.length;
    var numColumns = headerNames.length;
    
    //begin render loop
    outputText = '<?xml version="1.0" encoding="utf-8"?>' + newLine;
    outputText += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20001102//EN"    "http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd" [' + newLine;
    outputText += indent+'<!ENTITY ns_graphs "http://ns.adobe.com/Graphs/1.0/">' + newLine;
    outputText += indent+'<!ENTITY ns_vars "http://ns.adobe.com/Variables/1.0/">' + newLine;
    outputText += indent+'<!ENTITY ns_imrep "http://ns.adobe.com/ImageReplacement/1.0/">' + newLine;
    outputText += indent+'<!ENTITY ns_custom "http://ns.adobe.com/GenericCustomNamespace/1.0/">' + newLine;
    outputText += indent+'<!ENTITY ns_flows "http://ns.adobe.com/Flows/1.0/">' + newLine;
    outputText += indent+'<!ENTITY ns_extend "http://ns.adobe.com/Extensibility/1.0/">' + newLine;
    outputText += ']>' + newLine;
    outputText += '<svg>' + newLine;
    outputText += '<variableSets  xmlns="&ns_vars;">' + newLine;
    outputText += indent+'<variableSet  varSetName="binding1" locked="none">' + newLine;
    outputText += indent+indent+'<variables>' + newLine;
    for (var i=0; i < numColumns; i++) {
      outputText += indent+indent+indent+'<variable varName="'+headerNames[i]+'" trait="textcontent" category="&ns_flows;"></variable>' + newLine;
    };
    outputText += indent+indent+'</variables>' + newLine;
    outputText += indent+indent+'<v:sampleDataSets  xmlns:v="http://ns.adobe.com/Variables/1.0/" xmlns="http://ns.adobe.com/GenericCustomNamespace/1.0/">' + newLine;
    
    for (var i=0; i < numRows; i++) {
      var row = dataGrid[i];
      outputText += indent+indent+indent+'<v:sampleDataSet dataSetName="' + row[0] + '">'+newLine;
      for (var j=0; j < numColumns; j++) {
        outputText += indent+indent+indent+indent+'<'+headerNames[j]+'>'+newLine;          
        outputText += indent+indent+indent+indent+indent+'<p>' + row[j] + '</p>' +newLine;
        outputText += indent+indent+indent+indent+'</'+headerNames[j]+'>'+newLine
      };
      outputText += indent+indent+indent+'</v:sampleDataSet>'+newLine;
    };
    
    outputText += indent+indent+'</v:sampleDataSets>' + newLine;
    outputText += indent+'</variableSet>' + newLine;
    outputText += '</variableSets>' + newLine;
    outputText += '</svg>' + newLine;
    
    
    return outputText;
    
  },
  
}