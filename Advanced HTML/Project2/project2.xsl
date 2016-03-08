<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
   <head>
      <title>
         XML Exchange Information
      </title>
      <style type="text/css">
		body {
		font-family: Arial;
		font-size: 16px;
		color: blue;
		}
	    
	           h3 {
		font-size: 1.5em;
		color: navy;
		text-align:left;
		}
		
		.captions {
		color: yellow;
		background-color: black;
		font-weight: bold;
		}
		
		.nameCaption {
		color: yellow;
		}
		
		.lightblue {
		background-color:lightblue;
		color:navy;
		font-weight: 700;
		}
		
		.blueBack {
	           background-color: navy;
	           }
	           
	           .lightBlue {
	           background-color: lightblue;
	           }
	       	     
	       	table {
                      border: 1px solid black;
                      border-collapse: collapse; 
                      padding: 5em;
                      clear: both;
                      width: 100%;
                      margin-right: 1em;
                      margin-top: 1em;
                      margin-bottom: 1em;
                      }        
</style>
   </head>
<body>
    
    <tr><td colspan="7"><h3>Exchange Information</h3></td></tr>    
  
<xsl:for-each select="exchange/individual">
    <xsl:sort select="name/lastName" order="ascending"/> 
    <xsl:sort select="languagesSpoken/language/@fluency" order="descending"/> 
    <xsl:sort select="countryChoices/country/@preference" />
    
<table border="0" cellspacing="0" cellpadding="4"> 

<tr class="blueBack">
    <td class="captions">Exchange Type:</td>
    <td class="captions"><xsl:value-of select="name/@affiliation"/></td>
    
    <xsl:choose>
       
        <xsl:when test="name/@studentID">
            <td class="captions">Reference Number:</td>
            <td class="captions"><xsl:value-of select="name/@studentID"/></td> 
         </xsl:when>
         
          <xsl:when test="name/@teacherID">
            <td class="captions">Reference Number:</td>
            <td class="captions"><xsl:value-of select="name/@teacherID"/></td> 
         </xsl:when>
         
    </xsl:choose>
    
</tr>
<tr class="blueBack">
          <td class="nameCaption">Name(First,Middle,Last):</td>
          <td class="nameCaption"><xsl:value-of select="name/firstName"/></td>
          <td class="nameCaption"><xsl:value-of select="name/middleInitial"/></td>
          <td class="nameCaption"><xsl:value-of select="name/lastName"/></td>	
</tr>
<tr>
    <td class="lightBlue">Street, Apartment:</td>
        <td><xsl:value-of select="address/street"/></td>
        <td></td>
        <td><xsl:value-of select="address/apartment"/></td>       
</tr>
<tr>
    <td class="lightBlue">City, State, Zip:</td>
        <td><xsl:value-of select="address/city"/></td>
        <td><xsl:value-of select="address/state"/></td>
        <td><xsl:value-of select="address/zipCode"/></td>
</tr>
<tr>
    <td class="lightBlue">Country:</td>
        <td><xsl:value-of select="address/country"/></td>
</tr>
<tr>
    <td class="lightBlue">Telephone:</td>
        <td><xsl:value-of select="telephone"/></td>
</tr>
<tr>
    <td class="lightBlue">Email Address:</td>
        <td><xsl:value-of select="emailAddress"/></td>
</tr>

<tr>
    <td colspan="4"><hr/></td>
</tr>

<tr>
        <td>Applicate Date (mm dd yyyy):</td>
            <td><xsl:value-of select="concat(applicationDate/month, ' ', applicationDate/day, ' ', applicationDate/year)"/></td>
            
        <td>Available Date (mm dd yyyy):</td>
            <td><xsl:value-of select="concat(availableDate/month, ' ', availableDate/day, ' ', availableDate/year)"/></td>              
</tr>
<tr>
        <td>Birth Country:</td>
            <td><xsl:value-of select="birthCountry"/></td>
            
        <td>Birth Date (mm dd yyyy):</td>
            <td><xsl:value-of select="concat(dateOfBirth/month, ' ', dateOfBirth/day, ' ', dateOfBirth/year)"/></td>                  
</tr>
<tr>
        <td>Age:</td>
            <td><xsl:value-of select="age"/></td>
            
        <td>Gender:</td>
            <td><xsl:value-of select="gender"/></td>    
</tr>

<tr>
    <td colspan="4"><hr/></td>
</tr>

<tr>
    <td>School Name:</td>
        <td><xsl:value-of select="schoolName"/></td>
</tr>
<tr>
    <td>School Address:</td>
        <td><xsl:value-of select="schoolAddress/street"/></td>
        <td><xsl:value-of select="schoolAddress/apartment"/></td>       
</tr>
<tr>
    <td>City, State, Zip:</td>
        <td><xsl:value-of select="schoolAddress/city"/></td>
        <td><xsl:value-of select="schoolAddress/state"/></td>
        <td><xsl:value-of select="schoolAddress/zipCode"/></td>
</tr>
<tr>
    <td>Year in School:</td>
        <td><xsl:value-of select="yearsInSchool"/></td>
</tr>

<tr>
    <td colspan="4"><hr/></td>
</tr>

<tr>
          <td>Name(Last, First, Middle):</td>
          <td><xsl:value-of select="motherName/lastName"/></td>
          <td><xsl:value-of select="motherName/firstName"/></td>
          <td><xsl:value-of select="motherName/middleInitial"/></td>	
</tr>
<tr>
          <td>Name(Last, First, Middle):</td>
          <td><xsl:value-of select="fatherName/lastName"/></td>
          <td><xsl:value-of select="fatherName/firstName"/></td>
          <td><xsl:value-of select="fatherName/middleInitial"/></td>	
</tr>
<tr>
    <td>Emergency Telephone:</td>
        <td><xsl:value-of select="emergencyTelephone"/></td>
</tr>
<tr>
    <td>Fee Paid:</td>
        <td><xsl:value-of select="feePaid"/></td>
        <td><xsl:value-of select="feePaid/@currency"/></td>
</tr>
<tr>
    <td>Essay:</td>
        <td colspan="4"><xsl:value-of select="essay"/></td>
</tr>

<tr>
    <td colspan="4"><hr/></td>
</tr>
                    
<tr>
    
    <xsl:choose>
       
        <xsl:when test="languagesSpoken/language[@fluency='4']">
            <td>Fluency (1=none, 4=fluent):</td>
            <td><td><xsl:number value="4"/></td> </td> 
         </xsl:when>
         
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="languagesSpoken/language[@fluency='4']">
            <td>Language:</td>
            <td><xsl:value-of select="languagesSpoken/language[@fluency='4']"/></td> 
         </xsl:when>
        
    </xsl:choose>  
    
</tr> 
<tr>   
    <xsl:choose>
       
        <xsl:when test="languagesSpoken/language[@fluency='3']">
            <td>Fluency (1=none, 4=fluent):</td>
            <td><td><xsl:number value="3"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="languagesSpoken/language[@fluency='3']">
            <td>Language:</td>
            <td><xsl:value-of select="languagesSpoken/language[@fluency='3']"/></td> 
         </xsl:when>
        
    </xsl:choose>  
           
</tr>

<tr>   
    <xsl:choose>
       
        <xsl:when test="languagesSpoken/language[@fluency='2']">
            <td>Fluency (1=none, 4=fluent):</td>
            <td><td><xsl:number value="2"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="languagesSpoken/language[@fluency='2']">
            <td>Language:</td>
            <td><xsl:value-of select="languagesSpoken/language[@fluency='2']"/></td> 
         </xsl:when>
        
    </xsl:choose>  
           
</tr>

<tr>   
    <xsl:choose>
       
        <xsl:when test="languagesSpoken/language[@fluency='1']">
            <td>Fluency (1=none, 4=fluent):</td>
            <td><td><xsl:number value="1"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="languagesSpoken/language[@fluency='1']">
            <td>Language:</td>
            <td><xsl:value-of select="languagesSpoken/language[@fluency='1']"/></td> 
         </xsl:when>
        
    </xsl:choose>  
           
</tr>

<tr>
    <td colspan="4"><hr/></td>
</tr>

<tr>
    
    <xsl:choose>
       
        <xsl:when test="countryChoices/country[@preference='1']">
            <td>Priority (1=high, 5=low):</td>
            <td><td><xsl:number value="1"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="countryChoices/country[@preference='1']">
            <td>Country Choice:</td>
            <td><xsl:value-of select="countryChoices/country[@preference='1']"/></td> 
         </xsl:when>
        
    </xsl:choose>     
</tr>
<tr>
    <xsl:choose>
       
        <xsl:when test="countryChoices/country[@preference='2']">
            <td>Priority (1=high, 5=low):</td>
            <td><td><xsl:number value="2"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="countryChoices/country[@preference='2']">
            <td>Country Choice:</td>
            <td><xsl:value-of select="countryChoices/country[@preference='2']"/></td> 
         </xsl:when>
        
    </xsl:choose>     
</tr>
<tr>
   <xsl:choose>
       
        <xsl:when test="countryChoices/country[@preference='3']">
            <td>Priority (1=high, 5=low):</td>
            <td><td><xsl:number value="3"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="countryChoices/country[@preference='3']">
            <td>Country Choice:</td>
            <td><xsl:value-of select="countryChoices/country[@preference='3']"/></td> 
         </xsl:when>
        
    </xsl:choose>     
</tr>
<tr>
    <xsl:choose>
       
        <xsl:when test="countryChoices/country[@preference='4']">
            <td>Priority (1=high, 5=low):</td>
            <td><td><xsl:number value="4"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="countryChoices/country[@preference='4']">
            <td>Country Choice:</td>
            <td><xsl:value-of select="countryChoices/country[@preference='4']"/></td> 
         </xsl:when>
        
    </xsl:choose>     
</tr>
<tr>
    <xsl:choose>
       
        <xsl:when test="countryChoices/country[@preference='5']">
            <td>Priority (1=high, 5=low):</td>
            <td><td><xsl:number value="5"/></td> </td> 
         </xsl:when>
         
    </xsl:choose>
    
    <xsl:choose>     
   
         <xsl:when test="countryChoices/country[@preference='5']">
            <td>Country Choice:</td>
            <td><xsl:value-of select="countryChoices/country[@preference='5']"/></td> 
         </xsl:when>
        
    </xsl:choose>     
</tr>
</table>
</xsl:for-each>
</body>
</html>
</xsl:template>      	
</xsl:stylesheet>