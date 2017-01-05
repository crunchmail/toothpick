# Toothpick - Emailing framework

## HTML structure

### One column block

```html
<!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" width="600" align="center"><tr><td><![endif]-->
<div class="crunchBlock">
   <table cellpadding="0" cellspacing="0" align="center" class="" width="100%">
      <tr>
         <td>
            <!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" width="600" align="center"><tr><td><![endif]-->
            <div>
               <!-- content here -->
            </div>
            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
         </td>
      </tr>
   </table>
</div>
<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
```

### Two columns block

```html
<!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" width="600" align="center"><tr><td><![endif]-->
<div class="crunchBlock crunchCol crunchCol2">
   <table cellpadding="0" cellspacing="0" align="center" class="" width="100%">
      <tr>
         <td>
             <!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" width="600" align="center"><tr><td width="280" style="padding: 10px;"><![endif]-->
             <div>
                <!-- content here -->
             </div>
             <!--[if (gte mso 9)|(IE)]>
               </td>
               <td width="280" style="padding: 10px;">
             <![endif]-->
             <div>
                <!-- content here -->
             </div>
             <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
         </td>
      </tr>
   </table>
</div>
<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
```

### Two columns block

```html
<!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" width="600" align="center"><tr><td><![endif]-->
<div class="crunchBlock crunch3Col crunchCol">
 <table cellpadding="0" cellspacing="0" align="center" class="crunchWFull" width="100%">
    <tr>
       <td>
         <!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" width="540" align="center"><tr><td width="165" style="padding: 10px;"><![endif]-->
         <div>
            <!-- content here -->
         </div>
         <!--[if (gte mso 9)|(IE)]>
           </td>
           <td width="165" style="padding: 10px;">
         <![endif]-->
         <div>
            <!-- content here -->
         </div>
         <!--[if (gte mso 9)|(IE)]>
           </td>
           <td width="165" style="padding: 10px;">
         <![endif]-->
         <div>
            <!-- content here -->
         </div>
         <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
       </td>
    </tr>
 </table>
</div>
<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
```

## Block classes

`crunchWrapper`: Global class to set basic style on several elements (mandatory)
`crunchBlock`: Add padding on td element (25px) (mandatory, choose between crunchBlock and crunchBlockNoBg)
`crunchBlockNoBg`: Remove padding on td element (mandatory, choose between crunchBlock and crunchBlockNoBg)
`crunchFitBlock`: Set a 100% width
`crunchBgPrimaryColor`: Set the primary background color.
`crunchTac`: Center text
`crunchTal`: Align text on left
`crunchTar`: Align text on right
`crunchCol`: To apply columns setup on block
`crunchCol2`: 2 columns
`crunchCol3`: 3 columns
`crunch1-3ColLeft`: Left column with 1/3 width and right with 2/3
`crunch1-3ColRight`: Right column with 1/3 width and left with 2/3
`crunch1-4ColRight`: Right column with 1/4 width and left with 3/4
`crunch1-4ColLeft`: Left column with 1/4 width and right with 3/4
`crunchMessageUsers`: Basic style for header and footer message
`crunchInlineImg`: Set image(s) on inline position

## Element classes

`crunchTitle`: Title h1, h2, h3 ...
`crunchText`: Paragraph p
