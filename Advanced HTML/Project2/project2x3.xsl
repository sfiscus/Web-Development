<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" />
<xsl:decimal-format NaN="0000"/>
<xsl:decimal-format name="ageYear" NaN="00" />
<xsl:template match="exchange">
<xsl:for-each select="individual">
<xsl:value-of select="format-number(string(position()), '000000')" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(name/lastName, '                    '), 1, 20)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(name/firstName, '               '), 1, 15)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(name/middleInitial, ' '), 1, 1)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(address/street, '                    '), 1, 25)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(address/apartment, '                    '), 1, 12)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(address/city, '                    '), 1, 35)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(address/state, '                    '), 1, 15)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(address/zipCode, '          '), 1, 10)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(address/country, '                        '), 1, 30)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="translate(telephone, '( )', '')"/>
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(emailAddress, '                        '), 1, 30)" />
<xsl:text></xsl:text>
<xsl:value-of select="format-number(applicationDate/month, '00')" />
<xsl:text></xsl:text>
<xsl:value-of select="format-number(applicationDate/day, '00')" />
<xsl:text></xsl:text>
<xsl:value-of select="applicationDate/year" />
<xsl:text>|</xsl:text>
<xsl:value-of select="format-number(availableDate/month, '00')" />
<xsl:text></xsl:text>
<xsl:value-of select="format-number(availableDate/day, '00')" />
<xsl:text></xsl:text>
<xsl:value-of select="availableDate/year" />
<xsl:text>|</xsl:text>
<xsl:value-of select="format-number(dateOfBirth/month, '00')" />
<xsl:text></xsl:text>
<xsl:value-of select="format-number(dateOfBirth/day, '00')" />
<xsl:text></xsl:text>
<xsl:value-of select="dateOfBirth/year" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(birthCountry, '                        '), 1, 30)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="format-number(age, '00', 'ageYear')" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(gender, '                        '), 1, 1)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(birthCountry, '                        '), 1, 30)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(yearsInSchool, '                        '), 1, 9)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="translate(emergencyTelephone, '( )', '')"/>
<xsl:text>|</xsl:text>
<xsl:value-of select ="format-number(feePaid, ' ##,##00.00')"/>
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(feePaid/@currency, '                        '), 1, 3)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(motherName/lastName, '                    '), 1, 20)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(motherName/firstName, '               '), 1, 15)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(motherName/middleInitial, ' '), 1, 1)" />
<xsl:text>|</xsl:text>
<xsl:value-of select="substring(concat(fatherName/lastName, '                    '), 1, 20)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(fatherName/firstName, '               '), 1, 15)" />
<xsl:text></xsl:text>
<xsl:value-of select="substring(concat(fatherName/middleInitial, ' '), 1, 1)" />
<xsl:text>|</xsl:text>
<xsl:text>&#x0D;&#x0A;</xsl:text>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>