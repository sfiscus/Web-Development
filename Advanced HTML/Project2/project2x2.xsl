<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<style type="text/css">
    
                     body {
		font-family: Arial;
		font-size: 16px;
		color: blue;
		}
	    		
		.captions {
		color: yellow;
		background-color: black;
		font-weight: bold;
		text-align: center;
		}
		
		.nameCaption {
		color: yellow;
		background-color: black;
		}
		
		.red {
	           color: red;
	           }
	           	       	     
	       	table {
                      border: 1px solid black;
                      border-collapse: collapse; 
                      padding: 5em;
                      clear: both;
                      width: 75%;
                      margin-top: 1em;
                      margin-bottom: 1em;
                      margin:auto;
                      }  
                    
</style>
</head>
<body>
<xsl:apply-templates select="exchange"/>
</body>
</html>
</xsl:template> 
  
<xsl:template match="exchange">
    <table border="0" cellspacing="0" cellpadding="3"> 
        <tr class="captions">
            <td></td>
            <td>Exchange Information</td>  
            <td></td>  
        </tr>
    
    <tr class="nameCaption">
        <td>Exchange Type</td>
        <td>Name(last, first, middle)</td>
        <td>Country Choice</td>
    </tr>
    
    <xsl:apply-templates select="individual"/>
    
            <br></br>
            <br></br>
            
           <tr class="red">
	     <td colspan="2">The number of people applying for an exchange is:</td>
	       <xsl:value-of select="count(individual)"/>
           </tr>

           <tr>
	     <td colspan="2">The number of teachers applying for an exchange is:</td>
	       <xsl:value-of select="count(individual/name[@affiliation='T'])"/> 
           </tr>
           
           <tr>
	     <td colspan="2">The number of students applying for an exchange is:</td>
	       <xsl:value-of select="count(individual/name[@affiliation='S'])"/> 
           </tr>
    </table>
</xsl:template>    

<xsl:template match="individual">

    <tr>
        
        <xsl:choose>
             <xsl:when test="name[@affiliation='S']">
                <td>
                    Student
                </td>
        </xsl:when>
     
        <xsl:otherwise>
                <td>
                   Teacher
                </td>
        </xsl:otherwise>
     
        </xsl:choose>  
        
                <td>
                   <xsl:value-of select="substring(concat(name/lastName, ', ', name/firstName, ', ' ,name/middleInitial),1,30)"/>
                </td>	
    
        <xsl:choose>
        <xsl:when test="countryChoices/country[@preference='1']">
            <td>
                <xsl:value-of select="countryChoices/country[@preference='1']"/>
            </td> 
         </xsl:when>
         
         </xsl:choose> 
           	
         </tr>
         
        
</xsl:template>

</xsl:stylesheet>