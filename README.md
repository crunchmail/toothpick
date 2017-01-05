# Toothpick - Emailing framework for Toothpaste

## HTML structure for blocks

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

## HTML structure for element

### Title h1, h2, h3
```html
    <h1 class="crunchTitle crunchElement">Donec ullamcorper nulla metus</h1>
```

### Paragraph
```html
    <p class="crunchText crunchElement">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum accusamus laborum laboriosam consequuntur, enim nihil, rerum necessitatibus voluptates facilis ipsam iste incidunt eius quae atque hic perferendis itaque ad soluta.</p>
```

### Button
```html
    <table class="crunchButton crunchElement" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                <a class="crunchLink" href="">Button</a>
            </td>
        </tr>
    </table>
```
### Image
```html
    <img src="http://placehold.it/600x250" />
```

### Block classes

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
`crunchButton`: Basic style for button

## How to create a toothpaste template :

### Global template configuration and structure
Toothpaste wysiwyg conf : title, img, text, button. Use the `data-conf` attribute to add wisywg configuration on element.

Example for a image :
```html
    <img data-conf="img" src="http://placehold.it/600x250" />
    <!-- or -->
    <a href="#" data-conf="img">
        <img src="http://placehold.it/600x250" />
    </a>
```

Create your html and use `toothpage_htmlToJson.js` file to convert your html into json object

```javascript
    fct.convertTemplate('template_id');
```

### Template style
Create a less file with your properties

You can create custom style configuration for Toothpaste edition with less variables

Example :
```less
    @marginBlock: 30px;
    @_marginBlock_name: "Spaces beetween blocks";
    @_marginBlock_type: "range";
    @_marginBlock_min: 0;
    @_marginBlock_max: 50;
```

A toothpaste template have 6 colors maximum.

```less
    @primary_color:#16a085;
    @secondary_color0:#ecf0f1;
    @secondary_color1:#FFFFFF;
    @secondary_color2:#34495e;
    @secondary_color3:#bdc3c7;
    @secondary_color4:#666666;
```

Template color file is a json :

```json
    {
        "primary_color":"#16a085",
        "secondary_color0":"#ecf0f1",
        "secondary_color1":"#FFFFFF",
        "secondary_color2":"#34495e",
        "secondary_color3":"#bdc3c7",
        "secondary_color4":"#666666"
    }
```

### Final file architecture

```
    content.json (contain json template)
    color_set.json (template colors)
    style_set.less
```
