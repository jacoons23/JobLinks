/* References:
/* References:
   //Company//Click_Companies_Button//Select_Companies//Select_Companies_Ex//
   // Contents //

   // PolyFiller Functions //
   function ProgressBar(pxId, pnPercent, pxText)         // Draw Progress Bar for Record Paging and other purposes
   function ReadSetting(xSettingName)                    // Read Settings from Local Storage
   function SaveSetting(xSettingName, xSettingValue)     // Save Settings to Local Storage
   function hxMruAddItem (pxList, pxValue, pnMaxItems)   // Add Item to top of Most Recently Used List
   function hxReplaceAll(pxString, pxFrom, pxTo)         // Replace all occurrences of a String, case-insensitive

   function View_Notes(tf_Show)
   function Show_Main_Sections (tf_Show)
   function Show_Ids (pxIdList)
   var Companies
   var Industries
   *** Click-Functions ***
   function Click_Master(event)
   function View_Notes (cvn_Check_Id)
   function Click_Companies_Button
   function Click_Roles_Button
   function Click_Industries_Button
   function Click_Personal_Button

*/

// Global Declarations / Documentations
// g_Default_Section = "States_Section";
// g_Default_Section = "App_Section";
// g_Default_Section = "Quotes_Section";
// g_Default_Section = "Home_Section";

g_Default_Section = ReadSetting ("App.LastTab");
console.log (g_Default_Section)

if (g_Default_Section == null)
   {
   g_Default_Section = "Roles_Section";
   g_Default_Section = "Industries_Section";
   g_Default_Section = "Help_Section";
   g_Default_Section = "Tools_Section";
   g_Default_Section = "Programs_Section";
   g_Default_Section = "Writing_Section";
   g_Default_Section = "Personal_Section";
   g_Default_Section = "Companies_Section";
   g_Default_Section = "";
   g_Default_Section = "Portfolio_Section";
   g_Default_Section = "Favorites_Section";
   SaveSetting ("App.LastTab", g_Default_Section);
   }
// g_Default_Section = "Favorites_Section"; // Override User Default
console.log (g_Default_Section)

g_Selected_Action = "";       // Selected Action Action
g_Selected_Company = "";      // Selected Company from Companies_List
g_Selected_Role = "";         // Select Role from Roles_List
gId = "";                     // Last Element Id Clicked
gWord = [];
gActiveMainMenu = "";     // Last Active Button

// g_HTML_FileName = g_HTML_FileName;   // Unique File Name for this HTML File

// console.log (g_HTML_FileName);
//.getAttribute("data-File;");
//alert (xFileId);

function View_Notes(tf_Show) {
   // this should be one function to toggle according to Id instead of hard-coding them.
   if (tf_Show === true) {me_Sign = "+"} else {me_Sign="-"}
   Show_Ids (me_Sign + "Select_Companies");
   Show_Ids (me_Sign + "Select_Roles");
   Show_Ids (me_Sign + "Click_Industries_Button");
   Show_Ids (me_Sign + "Click_Personal_Button");

   Show_Ids (me_Sign + "View_Tools");
   Show_Ids (me_Sign + "View_Portfolio");
   Show_Ids (me_Sign + "View_Programs");
   Show_Ids (me_Sign + "View_Help");
   //New// New Notes
   return
   }

function Show_Main_Sections (tf_Show) {
   if (tf_Show === true) {me_Sign = "+"} else {me_Sign="-"}
   // this should be one function to toggle according to Id instead of hard-coding them.
   Show_Ids (me_Sign + "Companies_Section");
   Show_Ids (me_Sign + "Roles_Section");
   Show_Ids (me_Sign + "Industries_Section");
   Show_Ids (me_Sign + "Personal_Section");
   Show_Ids (me_Sign + "Portfolio_Section");
   Show_Ids (me_Sign + "Programs_Section");
   Show_Ids (me_Sign + "Writing_Section");
   Show_Ids (me_Sign + "Tools_Section");
   Show_Ids (me_Sign + "Favorites_Section");
   Show_Ids (me_Sign + "Help_Section");
   //New//New Sections//New Tabs//New_Sections//New_Tabs//
   return
   }

// //cm//Click//Click_Master//Click_Controller//
function Click_Master(event) { console.log ("Click_Master: (" + event.target.id + ")");
      // "gId" indicates which element was pressed, if available.
      // "gWord" shows the parsed words (by " ").
      gId = event.target.id;
      gWords = (gId + " ").split(" "); // Use for "array-item" clicking (Companies)
         gWord1 = gWords[0];
         gWord2 = gWords[1];

      console.log ("0087 Click_Master: gId=(" + gId + "), gWord1=(" + gWord1 + "), gWord2=(" + gWord2 + ")");

      if (gId === "")                           {/* console.error ("Click_Master: No Id."); */ return;}      // No Id
      if (gId === "ignore")                     {return;}                                    // Ignore Click without Error
      if (gId === "Click_Logo")                 {Click_Logo(gId); return;}                   //Click_Logo//
      if (gId === "View_All_Sections")          {View_All_Sections(gId); return;}            //View_All_Sections//
      if (gId === "View_Options")               {View_Options("View_Options"); return;}      //View_Options//
      if (gId === "View_All_Sections")          {View_Notes(gId); return;}                   //View_Notes//

      if (gWord1 == "Main_Menu_Option")         {Click_Main_Menu(event);return;}             //Main_Menu_Option//

      // Click on a major Tab to Display a Section //
      if (gId === "Click_Companies_Button")     {Click_Companies_Button(gId); return;}          //Click_Companies_Button//
      if (gId === "Click_Roles_Button")         {Click_Roles_Button(gId); return;}              //Click_Roles_Button//
      if (gId === "Click_Industries_Button")    {Click_Industries_Button(gId); return;}         //Click_Industries_Button//
      if (gId === "Click_Personal_Button")      {Click_Personal_Button(gId); return;}           //Click_Personal_Button//
      if (gId === "Click_Portfolio_Button")     {Click_Portfolio_Button(gId); return;}          //Click_Portfolio_Button//
      if (gId === "Click_Programs_Button")      {Click_Programs_Button(gId); return;}           //Click_Programs_Button//
      if (gId === "Click_Writing_Button")       {Click_Writing_Button(gId); return;}            //Click_Writing_Button//
      if (gId === "Click_Tools_Button")         {Click_Tools_Button(gId); return;}              //Click_Tools_Button//
      if (gId === "Click_Favorites_Button")     {Click_Favorites_Button(gId); return;}          //Click_Favorites_Button//
      if (gId === "Click_Help_Button")          {Click_Help_Button(gId); return;}               //Click_Help_Button//

      // Click on a List Item to Create Links //
      if (gWord1 == "Click_Companies_List")     {Click_Companies_List(gId, gWord2);return;}     //Click_Companies_List//
      if (gWord1 == "Click_Roles_List")         {Click_Roles_List(gId, gWord2);return;}         //Click_Roles_List//
      if (gWord1 == "Click_Industries_List")    {Click_Industries_List(gId, gWord2);return;}    //Click_Industry_List//
      if (gWord1 == "Click_Personal_List")      {Click_Personal_List(gId, gWord2);return;}      //Click_Personal_List//
      if (gWord1 == "Click_Portfolio_List")     {Click_Portfolio_List(gId, gWord2); return;}    //Click_Portfolio_List//
      if (gWord1 == "Click_Programs_List")      {Click_Programs_List(gId, gWord2); return;}     //Click_Programs_List//
      if (gWord1 == "Click_Writing_List")       {Click_Writing_List(gId, gWord2); return;}      //Click_Writing_List//
      if (gWord1 == "Click_Tools_List")         {Click_Tools_List(gId, gWord2);return;}         //Click_Tools_List//
      // Click_Favorites_List doesn't exist because it uses simple hyperlinks //                //Click_Favorites_List//
      if (gWord1 == "Click_Help_List")          {Click_Help_List(gId, gWord2);return;}          //Click_Help_List//

      // Click the "Recent" Checkbox to Toggle the Recent Selections //
      if (gId === "Show_Companies_MRU")         {Show_Companies_MRU(gId); return;}              //Show_Companies_MRU//
      if (gId === "Show_Roles_MRU")             {Show_Roles_MRU(gId); return;}                  //Show_Roles_MRU//
      if (gId === "Show_Industries_MRU")        {Show_Industries_MRU(gId); return;}             //Show_Industries_MRU//
      if (gId === "Show_Personal_MRU")          {Show_Personal_MRU(gId); return;}               //Show_Personal_MRU//

      // //Companies// Fake Click on Companies List and pass Company to Function (let it take care of the Company)
      if (gId == "Enter_Custom_Company")        // Enter Custom Company Text
         {
            gId = "Click_Companies_List";
            gCompanyName = document.getElementById("Enter_Custom_Company").value;
            Click_Companies_List(gId, -5, gCompanyName);
            return
         }

      // //Roles// Fake Click on Roles List and pass Role to Function (let it take care of the Role)
      if (gId == "Enter_Custom_Role")           // Enter Custom Role Text
         {
            gId = "Click_Roles_List";
            gRoleName = document.getElementById("Enter_Custom_Role").value;
            Click_Roles_List(gId, -5, gRoleName);
            return
         }

      // //Industries// Fake Click on Industries List and pass Industry to Function (let it take care of the Industry)
      if (gId == "Enter_Custom_Industry")       // Enter Custom Industry Text
         {
            gId = "Click_Industries_List";
            gIndustryName = document.getElementById("Enter_Custom_Industry").value;
            Click_Industries_List(gId, -5, gIndustryName);
            return
         }

      // //Personal// Fake Click on Personal List and pass Personal to Function (let it take care of the Personal)
      if (gId == "Enter_Custom_Personal")       // Enter Custom Personal Text
         {
            gId = "Click_Personal_List";
            gPersonalName = document.getElementById("Enter_Custom_Personal").value;
            Click_Personal_List(gId, -5, gPersonalName);
            return
         }

      // //Recent//RecentItems// Pass RecentItem to Function
      if (gId == "Enter_Recent_Items") {SharedSetRecentItems(event); return;} // Enter # of Recent Items

//New//New Sections//New Tabs//New_Sections//New_Tabs//

      if (gId === "Click_ListSize")             {Click_ListSize(gId); return;}                  //Click_ListSize//

      if (gId === "DownloadFile")               {DownloadFile(); return;}                       //Click_ListSize//

      //Favorites.SetFilter///SetFilter//filter//
      if (gId === "Favorites_Filter")
         {
         xPrompt='Filter Favorites (CONTAINS):\n\nExamples: FREE, CSS, BEATLES, "*" to Remove Filter'
         xFilter = prompt(xPrompt, "");
         if (xFilter != null) {
            // alert(xFilter)
            Favorites.SetFilter (xFilter);
            return;
            }
         return;
         }

      //Favorites.ResetFilter//filter//
      if (gId === "Reset_Favorites_Filter")
         {
         Favorites.ResetFilter ();
         return;
         }

      //Favorites.ViewProperties//properties//
      if (gId === "Show_Favorites_Properties")
         {
         xVisible = document.getElementById("Inject_Favorites_Properties").style.display;
            xVisible = xVisible.toUpperCase();
         // console.log ("xVisible=/" + xVisible + "/")
         if (xVisible == "" | xVisible == "NONE")
            {document.getElementById("Inject_Favorites_Properties").style.display = "block"}
         else
            {document.getElementById("Inject_Favorites_Properties").style.display = "none"}
//fart
         xFilterSetting = ReadSetting ("Favorites.LastFilter");
         // Build TABLE
         html =        "<table>"
         html = html + "   <tr><td>Main Favorites List</td><td><keyword>" + (Favorites.BaseList.length) +
                       "</keyword> Records</td></tr>";
         html = html + "   <tr><td>Current Filter     </td><td><keyword>" + xFilterSetting + "</keyword>" +
                       " (<keyword>" + (Favorites.List.length) + "</keyword>" +
                       " Records)</td></tr>";
         html = html + "</table>"
         xInfo = html

         gPersonalName = document.getElementById("Inject_Favorites_Properties").innerHTML = xInfo;
         return;
         }

      //New// New Functions

      console.error ("0087 Click_Master FAIL: gId=(" + gId + "), gWord1=(" + gWord1 + ") gWord2=(" + gWord2 + ")");

      }



//Functions//Code//
function SaveSetting(xSettingName, xSettingValue) {// console.log ("f: SaveSetting('" + xSettingName + "')=> '" + xSettingValue  + "'");
   // Saves localStorage values (key/value pair)
   //    Format: SaveSetting("UserId", "John_Smith");
   //    Keywords: //settings//save settings//savesettings//save_settings//
   // History:
   //    08/10/2020 v01 Written by James Coons.
   //    11/07/2020 v02 Converted to JSON strings.
   localStorage.setItem(xSettingName, xSettingValue);
   // window.localStorage.setItem(xSettingName, JSON.stringify(xSettingValue));
   // Alter SaveSetting or ReadSetting to pass "/DELETE" as value to delete item.
   // localStorage.removeItem('key');
   }

function ReadSetting(xSettingName) {
   // Loads localStorage values (key/value pair)
   //    Format: xUserId = ReadSetting("UserId"); // => "John_Smith"
   //    Keywords: //settings//load settings//ReadSettings//load_settings//
   // History:
   //    08/10/2020 v01 Written by James Coons.
   //    11/07/2020 v02 Converted to JSON strings.
   xValue = localStorage.getItem(xSettingName);
   // xValue = JSON.parse(window.localStorage.getItem('xSettingName'));
// xTest = xValue + "";
// console.log ("ReadSetting: " + xSettingName + "/" + xTest + "/" + xTest.substring(0))
//  + "/" + xValue[xValue.length-1])
   // if (xValue[0] == '"' & xValue [-1] == '"')
   // console.log ("f: ReadSetting(" + xSettingName + " => " + xValue);
   return localStorage.getItem(xSettingName);
   }

// Purpose: Show or Hide multiple Elements by Id.
//    Keywords: //Show//Hide//Set//Set_Id//Show_Ids//Set Element//Set Elements//set_element//Set_Elements/Show Element//Hide Element//
//    Format: Show_Ids ("+elementname,...,-elementname")
//    NOTES: How to know the "previous" value? Because it could be "inline, run-in, block, none, etc" BEFORE it was hidden. /fix
//           "display: initial" to reset original value?
// History:
//    08/05/2020 v01 Written by James Coons.
//    09/12/2020 v02 Added error trapping.
function Show_Ids (pxIdList) {console.log ("... f: show_Ids (" + pxIdList + ")");
   meElements = pxIdList.split(",");
   var i;
   for (i = 0; i < meElements.length; i++)
      {
         xThisElement = meElements[i];
         xPlusMinus = xThisElement[0];
         xThisElement = xThisElement.substring(1);
         xDefault = "none"; // ReadSetting ("D:" + xThisElement);
         objElement = document.getElementById(xThisElement)
         // console.log (objElement);
         switch(true) {
            case objElement === null | objElement === "" :
               console.error  ("...... Show_Ids: Id Error: (" + xThisElement + ")");
               break;
            case xPlusMinus === "+":
               objElement.style.display = "block";
               break;
            case xPlusMinus === "-":
               objElement.style.display = "none";
               break;
            default:
               console.error ("...... Show_Ids: Id Error: (" + xThisElement + ")");
               break;
         }
      }
   }

// //Click_Master//Click_Logo//****************************************
function Click_Logo (gId) {// console.log ("265 Click_Logo: id=(" + gId + ")");
   // window.location.reload(true);
   }

// //Click_Master//View_Options****************************************************************
function View_Options (gcoId) {
   // var gcoChecked = document.getElementById("View_Options").checked;
   var gcoChecked = document.getElementById(gcoId).checked;
   if (gcoChecked === true) {gcoSign = "+"} else {gcoSign="-"}
   console.log ("213 View_Options: Id=" + gcoId + ", Checked=" + gcoChecked + ", Sign=" + gcoSign);
   Show_Ids (gcoSign + "Options_Section");
   }

// //Click_Master//View_Notes *******************************************************************
// Set Elements (Notes Sections) on/off, if Class="IsNote", depending on checked status of "View_All_Sections" Element
function View_Notes (gvnId) {
   var gvnChecked = document.getElementById(gvnId).checked; // "View_All_Sections"
   if (gvnChecked === true) {gvnSign = "+"} else {gvnSign="-"}
   console.log ("219 View_Notes: id=(" + gvnId + ")");
   var x = document.getElementsByClassName("IsNote");
   for (i = 0; i < x.length; i++)
      {
         Show_Ids (gvnSign + x[i].id);
      }
   return
   }

function hxMruAddItem (pxList, pxValue, pnMaxItems)
   // Add item to Top of pipe-delimited MRU List, size limited by pnMaxItems (default=20) //
   // Keywords: //Recent//MRU//
   //
   // History:
   //    11/08/2020 v01 Written by James Coons.
   //    11/10/2020 v02 Rewrote using Array Functions.
   {
   maList = pxList;
   maSplit = maList.split("|");
   // Delete value "pxValue" if already in List (at index=maIndex)
   maIndex = maSplit.indexOf(pxValue);
      if (maIndex !== -1) {maSplit.splice(maIndex, 1);}
   maSplit.unshift(pxValue) // Add Value "pxValue" to top of List

   // Limit List to "pnMaxItems" Items (25 default)
   maMaxItems = (pnMaxItems);
      if (maMaxItems == null) {maMaxItems = 25};
      if (maMaxItems < 1) {maMaxItems = 25};
   maCount = (maSplit.length);
      if (maMaxItems > 0 && maCount > maMaxItems) {maSplit.pop()}
   maNew = maSplit.join("|")
   return maNew;
   }

function View_All_Sections (gvaCheckId) {
   // Set Elements (All_Sections) on/off, depending on checked status of "View_All_Sections" Element
   // //Click_Master//View_All_Sections//
   var gvaChecked = document.getElementById(gvaCheckId).checked; // "View_All_Sections"
   if (gvaChecked === true) {gvaSign = "+"} else {gvaSign="-"}
   console.log ("339 View_All_Sections: Id=" + gvaCheckId + ", Checked=" + gvaChecked + ", Sign=" + gvaSign);
   Show_Main_Sections (gvaChecked);
   // Show_Ids (gvaSign + "All_Section");
   }
function Show_Companies_MRU (gvaCheckId) {
   // Set Elements (All Recent_Searches Sections) on/off, depending on checked status of "Show_Companies_MRU" Element
   // //Click_Master//Show_Companies_MRU//Recent_Companies_Section
   var gvaChecked = document.getElementById(gvaCheckId).checked; // "Show_Companies_MRU"
   SaveSetting ("Show_Companies_MRU",gvaChecked);
   if (gvaChecked === true)
      {document.getElementById("Recent_Companies_Section").style.display = "inline-flex";}
   else
      {document.getElementById("Recent_Companies_Section").style.display = "none";}
   }
function Show_Roles_MRU (gvaCheckId) {
   // Set Elements (All Recent_Searches Sections) on/off, depending on checked status of "Show_Roles_MRU" Element
   // //Click_Master//Show_Roles_MRU//Recent_Roles_Section//
   var gvaChecked = document.getElementById(gvaCheckId).checked; // "Show_Roles_MRU"
   SaveSetting ("Show_Roles_MRU",gvaChecked);
   if (gvaChecked === true)
      {document.getElementById("Recent_Roles_Section").style.display = "inline-flex";}
   else
      {document.getElementById("Recent_Roles_Section").style.display = "none";}
   }
function Show_Recent_Industries (gvaCheckId) {
   // Set Elements (All Recent_Searches Sections) on/off, depending on checked status of "Show_Recent_Industries" Element
   // //Click_Master//Show_Recent_Industries//
   var gvaChecked = document.getElementById(gvaCheckId).checked; // "Show_Recent_Industries"
   if (gvaChecked === true) {gvaSign = "+"} else {gvaSign="-"}
   SaveSetting ("Show_Recent_Industries",gvaChecked);
   Show_Ids (gvaSign + "Recent_Industries_Searches");
   }
function Show_Recent_Personal (gvaCheckId) {
   // Set Elements (All Recent_Searches Sections) on/off, depending on checked status of "Show_Recent_Personal" Element
   // //Click_Master//Show_Recent_Personal//
   var gvaChecked = document.getElementById(gvaCheckId).checked; // "Show_Recent_Personal"
   if (gvaChecked === true) {gvaSign = "+"} else {gvaSign="-"}
   SaveSetting ("Show_Recent_Personal",gvaChecked);
   Show_Ids (gvaSign + "Recent_Personal_Searches");
   }







// //Click_Master//Click_ListSize ****************************************************************
function Click_ListSize (ctps_Check_Id) {console.log ("295 Click_ListSize: id=(" + gId + ")");
// Is this actually used now? Looks like maybe not.
   var ctps_Checked = document.getElementById(ctps_Check_Id).checked;
   if (ctps_Checked === true) {ctps_Sign = "+"} else {ctps_Sign="-"}
   // console.log (ctps_Checked); console.log (ctps_Sign)
   Show_Ids (ctps_Sign + "ListSize_Section");
   }

// //Click_Master//Click_Companies_Button// ***************************************************
function Click_Companies_Button (gId) {console.log ("Click_Companies_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Companies";
   Show_Main_Sections (false);
   Show_Ids ("+Companies_Section");
   SaveSetting ("App.LastTab", "Companies_Section");
   return;
   }

// //Click_Master//Click_Roles_Button// ***************************************************
function Click_Roles_Button (gId) {console.log ("Click_Roles_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Roles";
   Show_Main_Sections (false);
   Show_Ids ("+Roles_Section");
   SaveSetting ("App.LastTab", "Roles_Section");
   return;
   }

// //Click_Master//Click_Industries_Button// ***************************************************
function Click_Industries_Button (gId) {console.log ("Click_Industries_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Industries";
   Show_Main_Sections (false);
   Show_Ids ("+Industries_Section");
   SaveSetting ("App.LastTab", "Industries_Section");
   return;
   }

// //Click_Master//Click_Personal_Button// ***************************************************
function Click_Personal_Button (gId) {console.log ("Click_Personal_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Personal (in progress)";
   Show_Main_Sections (false);
   Show_Ids ("+Personal_Section");
   SaveSetting ("App.LastTab", "Personal_Section");
   return;
   }

// //Click_Master//Click_Tools_Button// ***************************************************
function Click_Tools_Button (gId) {console.log ("Click_Tools_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Tools";
   Show_Main_Sections (false);
   Show_Ids ("+Tools_Section");
   SaveSetting ("App.LastTab", "Tools_Section");
   return;
   }

// //Click_Master//Click_Favorites_Button// ***************************************************
function Click_Favorites_Button (gId) {console.log ("Click_Favorites_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Favorites";
   Show_Main_Sections (false);
   Show_Ids ("+Favorites_Section");
   SaveSetting ("App.LastTab", "Favorites_Section");
   return;
   }

// //Click_Master//Click_Portfolio_Button// ***************************************************
function Click_Portfolio_Button (gId) {console.log ("Click_Portfolio_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Portfolio";
   Show_Main_Sections (false);
   Show_Ids ("+Portfolio_Section");
   SaveSetting ("App.LastTab", "Portfolio_Section");
   return;
   }

// //Click_Master//Click_Programs_Button// ***************************************************
function Click_Programs_Button (gId) {console.log ("Click_Programs_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Programs";
   Show_Main_Sections (false);
   Show_Ids ("+Programs_Section");
   SaveSetting ("App.LastTab", "Programs_Section");
   return;
   }

// //Click_Master//Click_Writing_Button// ***************************************************
function Click_Writing_Button (gId) {console.log ("Click_Writing_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Writing";
   Show_Main_Sections (false);
   Show_Ids ("+Writing_Section");
   SaveSetting ("App.LastTab", "Writing_Section");
   return;
   }

// //Click_Master//Click_Help_Button// ***************************************************
function Click_Help_Button (gId) {console.log ("Click_Help_Button: id=(" + gId + ")");
   // console.clear();
   g_Selected_Action = "Select Help";
   Show_Main_Sections (false);
   Show_Ids ("+Help_Section");
   SaveSetting ("App.LastTab", "Help_Section");
   return;
   }

//New// New Functions

// MsgBox and Related items //MsgBox//
function MsgBox(pxMsgText, yesFn, noFn)
   // 09/17/2020 Written by James Coons.
   {
   // MsgBox - Check if object exists, if not create it in the DOM, hidden
   objMsgBox_Prompt = document.getElementById("MsgBox_Prompt")
   objMsgBox_Prompt.innerText = pxMsgText;
   objMsgBox = document.getElementById("MsgBox")
   return "testing"

/*
    objMsgBox.find(".yes").click(yesFn);
    objMsgBox.find(".no").click(noFn);
    objMsgBox.show();
*/
}

///HERE///

console.log ("@3: Here")

// *** //Companies//Companies_OBJECT//Companies_Var// ******************************************************************
// /here
var Companies =
   {
      ListSize: 20,        // Companies.ListSize     : Number of Items per displayed page (index increment, fixed)
      BaseList: [ // Companies.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
         {Name: "3M"},
         {Name: "A-Mark Precious Metals"},
         {Name: "ABM Industries"},
         {Name: "Adecco"},
         {Name: "ADP"},
         {Name: "AECOM"},
         {Name: "AES"},
         {Name: "AGCO"},
         {Name: "AIG"},
         {Name: "AK Steel Holding"},
         {Name: "AT&T"},
         {Name: "AbbVie"},
         {Name: "Abbott Laboratories"},
         {Name: "Activision Blizzard"},
         {Name: "Adobe"},
         {Name: "Advance Auto Parts"},
         {Name: "Advanced Micro Devices"},
         {Name: "Aflac"},
         {Name: "Air Products & Chemicals"},
         {Name: "Alaska Air Group"},
         {Name: "Albertsons"},
         {Name: "Alcoa"},
         {Name: "Alleghany"},
         {Name: "Alliance Data Systems"},
         {Name: "Allstate"},
         {Name: "Ally Financial"},
         {Name: "Alphabet"},
         {Name: "Altice USA"},
         {Name: "Altria Group"},
         {Name: "Amazon.com"},
         {Name: "Ameren"},
         {Name: "American Airlines Group"},
         {Name: "American Axle & Manufacturing"},
         {Name: "American Electric Power"},
         {Name: "American Express"},
         {Name: "American Family Insurance Group"},
         {Name: "American Financial Group"},
         {Name: "American Tower"},
         {Name: "Ameriprise Financial"},
         {Name: "AmerisourceBergen"},
         {Name: "Amgen"},
         {Name: "Amphenol"},
         {Name: "Anadarko Petroleum"},
         {Name: "Analog Devices"},
         {Name: "Anixter International"},
         {Name: "Anthem"},
         {Name: "Apache"},
         {Name: "Apple"},
         {Name: "Applied Materials"},
         {Name: "Aramark"},
         {Name: "Archer Daniels Midland"},
         {Name: "Arconic"},
         {Name: "Arrow Electronics"},
         {Name: "Arthur J. Gallagher"},
         {Name: "Asbury Automotive Group"},
         {Name: "Ascena Retail Group"},
         {Name: "Assurant"},
         {Name: "Auto-Owners Insurance"},
         {Name: "AutoNation"},
         {Name: "AutoZone"},
         {Name: "Autoliv"},
         {Name: "Avery Dennison"},
         {Name: "Avis Budget Group"},
         {Name: "Avnet"},
         {Name: "BB&T Corp."},
         {Name: "BJ's Wholesale Club"},
         {Name: "Ball"},
         {Name: "Bank of America"},
         {Name: "Bank of New York Mellon"},
         {Name: "Baxter International"},
         {Name: "Beacon Roofing Supply"},
         {Name: "Becton Dickinson"},
         {Name: "Bed Bath & Beyond"},
         {Name: "Berkshire Hathaway"},
         {Name: "Berry Global Group"},
         {Name: "Best Buy"},
         {Name: "Biogen"},
         {Name: "BlackRock"},
         {Name: "Blackstone Group"},
         {Name: "Boeing"},
         {Name: "Booking Holdings"},
         {Name: "Booz Allen Hamilton"},
         {Name: "BorgWarner"},
         {Name: "Boston Scientific"},
         {Name: "Brighthouse Financial"},
         {Name: "Bristol-Myers Squibb"},
         {Name: "Broadcom"},
         {Name: "Builders FirstSource"},
         {Name: "Burlington Stores"},
         {Name: "C.H. Robinson Worldwide"},
         {Name: "CBRE Group"},
         {Name: "CBS"},
         {Name: "CDW"},
         {Name: "CHS"},
         {Name: "CMS Energy"},
         {Name: "CSX"},
         {Name: "CVS Health"},
         {Name: "Caesars Entertainment"},
         {Name: "Calpine"},
         {Name: "Campbell Soup"},
         {Name: "Capital One Financial"},
         {Name: "CarMax"},
         {Name: "Cardinal Health"},
         {Name: "Casey's General Stores"},
         {Name: "Caterpillar"},
         {Name: "Celanese"},
         {Name: "Celgene"},
         {Name: "Centene"},
         {Name: "CenterPoint Energy"},
         {Name: "CenturyLink"},
         {Name: "Charles Schwab"},
         {Name: "Charter Communications"},
         {Name: "Chemours"},
         {Name: "Cheniere Energy"},
         {Name: "Chesapeake Energy"},
         {Name: "Chevron"},
         {Name: "Cigna"},
         {Name: "Cintas"},
         {Name: "Cisco Systems"},
         {Name: "Citigroup"},
         {Name: "Citizens Bank"},
         {Name: "Citizens Financial Group"},
         {Name: "Clorox"},
         {Name: "Coca-Cola"},
         {Name: "Cognizant Technology Solutions"},
         {Name: "Colgate-Palmolive"},
         {Name: "Comcast"},
         {Name: "Community Health Systems"},
         {Name: "Conagra Brands"},
         {Name: "ConocoPhillips"},
         {Name: "Consolidated Edison"},
         {Name: "Constellation Brands"},
         {Name: "Core-Mark Holding"},
         {Name: "Corning"},
         {Name: "Costco Wholesale"},
         {Name: "Coty"},
         {Name: "Crown Holdings"},
         {Name: "Cummins"},
         {Name: "D.R. Horton"},
         {Name: "DCP Midstream"},
         {Name: "DISH Network"},
         {Name: "DTE Energy"},
         {Name: "HXC Technology"},
         {Name: "DaVita"},
         {Name: "Dana"},
         {Name: "Danaher"},
         {Name: "Darden Restaurants"},
         {Name: "Dean Foods"},
         {Name: "Deere"},
         {Name: "Delek US Holdings"},
         {Name: "Dell Technologies"},
         {Name: "Delta Air Lines"},
         {Name: "Devon Energy"},
         {Name: "Dick's Sporting Goods"},
         {Name: "Dillard's"},
         {Name: "Discover Financial Services"},
         {Name: "Discovery"},
         {Name: "Dollar General"},
         {Name: "Dollar Tree"},
         {Name: "Dominion Energy"},
         {Name: "Dover"},
         {Name: "DuPont de Nemours"},
         {Name: "Duke Energy"},
         {Name: "eBay"},
         {Name: "EMCOR Group"},
         {Name: "EOG Resources"},
         {Name: "Eastman Chemical"},
         {Name: "Ecolab"},
         {Name: "Edison International"},
         {Name: "Eli Lilly"},
         {Name: "Emerson Electric"},
         {Name: "EnLink Midstream"},
         {Name: "Energy Transfer"},
         {Name: "Entergy"},
         {Name: "Enterprise Products Partners"},
         {Name: "Erie Insurance Group"},
         {Name: "Estee Lauder"},
         {Name: "Eversource Energy"},
         {Name: "Exelon"},
         {Name: "Expedia Group"},
         {Name: "Expeditors Intl. of Washington"},
         {Name: "Exxon Mobil"},
         {Name: "Facebook"},
         {Name: "Fannie Mae"},
         {Name: "Farmers Insurance Exchange"},
         {Name: "FedEx"},
         {Name: "Fidelity National Financial"},
         {Name: "Fidelity National Information Services"},
         {Name: "Fifth Third Bancorp"},
         {Name: "First American Financial"},
         {Name: "First Data"},
         {Name: "FirstEnergy"},
         {Name: "Fiserv"},
         {Name: "Fluor"},
         {Name: "Foot Locker"},
         {Name: "Ford Motor"},
         {Name: "Fortive"},
         {Name: "Franklin Resources"},
         {Name: "Freddie Mac"},
         {Name: "Freeport-McMoRan"},
         {Name: "Frontier Communications"},
         {Name: "GameStop"},
         {Name: "Gap"},
         {Name: "General Dynamics"},
         {Name: "General Electric"},
         {Name: "General Mills"},
         {Name: "General Motors"},
         {Name: "Genuine Parts"},
         {Name: "Genworth Financial"},
         {Name: "Gilead Sciences"},
         {Name: "Global Partners"},
         {Name: "Goldman Sachs Group"},
         {Name: "Goodyear Tire & Rubber"},
         {Name: "Graphic Packaging Holding"},
         {Name: "Graybar Electric"},
         {Name: "Group 1 Automotive"},
         {Name: "Guardian Life Ins. Co. of America"},
         {Name: "HCA Healthcare"},
         {Name: "HD Supply Holdings"},
         {Name: "HP"},
         {Name: "Halliburton"},
         {Name: "Hanesbrands"},
         {Name: "Harley-Davidson"},
         {Name: "Harris"},
         {Name: "Hartford Financial Services"},
         {Name: "Henry Schein"},
         {Name: "Hershey"},
         {Name: "Hertz Global Holdings"},
         {Name: "Hess"},
         {Name: "Hewlett Packard Enterprise"},
         {Name: "Hilton Worldwide Holdings"},
         {Name: "HollyFrontier"},
         {Name: "Home Depot"},
         {Name: "Honeywell International"},
         {Name: "Hormel Foods"},
         {Name: "Humana"},
         {Name: "Huntington Ingalls Industries"},
         {Name: "Huntsman"},
         {Name: "IBM"},
         {Name: "iHeartMedia"},
         {Name: "INTL FCStone"},
         {Name: "IQVIA Holdings"},
         {Name: "Icahn Enterprises"},
         {Name: "Illinois Tool Works"},
         {Name: "Ingredion"},
         {Name: "Insight Enterprises"},
         {Name: "Intel"},
         {Name: "Intercontinental Exchange"},
         {Name: "International Paper"},
         {Name: "Interpublic Group"},
         {Name: "Intuit"},
         {Name: "J.B. Hunt Transport Services"},
         {Name: "J.C. Penney"},
         {Name: "J.M. Smucker"},
         {Name: "JPMorgan Chase"},
         {Name: "Jabil"},
         {Name: "Jacobs Engineering Group"},
         {Name: "Jefferies Financial Group"},
         {Name: "JetBlue Airways"},
         {Name: "Johnson & Johnson"},
         {Name: "Jones Financial (Edward Jones)"},
         {Name: "Jones Lang LaSalle"},
         {Name: "Kellogg"},
         {Name: "Keurig Dr Pepper"},
         {Name: "KeyCorp"},
         {Name: "Kimberly-Clark"},
         {Name: "Kinder Morgan"},
         {Name: "Kohl's"},
         {Name: "Kraft Heinz"},
         {Name: "Kroger"},
         {Name: "L Brands"},
         {Name: "L3 Technologies"},
         {Name: "LKQ"},
         {Name: "Laboratory Corp. of America"},
         {Name: "Lam Research"},
         {Name: "Land O'Lakes"},
         {Name: "Las Vegas Sands"},
         {Name: "Lear"},
         {Name: "Leidos Holdings"},
         {Name: "Lennar"},
         {Name: "Levi Strauss"},
         {Name: "Liberty Media"},
         {Name: "Liberty Mutual Insurance Group"},
         {Name: "Lincoln National"},
         {Name: "Lithia Motors"},
         {Name: "Live Nation Entertainment"},
         {Name: "Lockheed Martin"},
         {Name: "Loews"},
         {Name: "Lowe's"},
         {Name: "M&T Bank Corp."},
         {Name: "MGM Resorts International"},
         {Name: "Macy's"},
         {Name: "Magellan Health"},
         {Name: "ManpowerGroup"},
         {Name: "Marathon Oil"},
         {Name: "Marathon Petroleum"},
         {Name: "Markel"},
         {Name: "Marriott International"},
         {Name: "Marsh & McLennan"},
         {Name: "MasTec"},
         {Name: "Masco"},
         {Name: "Massachusetts Mutual Life Insurance"},
         {Name: "Mastercard"},
         {Name: "McDonald's"},
         {Name: "McKesson"},
         {Name: "Merck"},
         {Name: "MetLife"},
         {Name: "Micron Technology"},
         {Name: "Microsoft"},
         {Name: "Mohawk Industries"},
         {Name: "Molina Healthcare"},
         {Name: "Molson Coors Brewing"},
         {Name: "Mondelez International"},
         {Name: "Morgan Stanley"},
         {Name: "Mosaic"},
         {Name: "Motorola Solutions"},
         {Name: "Murphy USA"},
         {Name: "Mutual of Omaha Insurance"},
         {Name: "NCR"},
         {Name: "NGL Energy Partners"},
         {Name: "NRG Energy"},
         {Name: "NVR"},
         {Name: "National Oilwell Varco"},
         {Name: "Nationwide"},
         {Name: "Navient"},
         {Name: "Navistar International"},
         {Name: "NetApp"},
         {Name: "Netflix"},
         {Name: "New York Life Insurance"},
         {Name: "Newell Brands"},
         {Name: "Newmont Goldcorp"},
         {Name: "News Corp."},
         {Name: "NextEra Energy"},
         {Name: "Nike"},
         {Name: "Nordstrom"},
         {Name: "Norfolk Southern"},
         {Name: "Northern Trust"},
         {Name: "Northrop Grumman"},
         {Name: "Northwestern Mutual"},
         {Name: "Nucor"},
         {Name: "Nvidia"},
         {Name: "O'Reilly Automotive"},
         {Name: "ON Semiconductor"},
         {Name: "Occidental Petroleum"},
         {Name: "Office Depot"},
         {Name: "Old Republic International"},
         {Name: "Olin"},
         {Name: "Omnicom Group"},
         {Name: "Oneok"},
         {Name: "Oracle"},
         {Name: "Oshkosh"},
         {Name: "Owens & Minor"},
         {Name: "Owens Corning"},
         {Name: "Owens-Illinois"},
         {Name: "PBF Energy"},
         {Name: "PG&E"},
         {Name: "PNC Financial Services"},
         {Name: "PPG Industries"},
         {Name: "PPL"},
         {Name: "PVH"},
         {Name: "Paccar"},
         {Name: "Pacific Life"},
         {Name: "Packaging Corp. of America"},
         {Name: "Parker-Hannifin"},
         {Name: "PayPal Holdings"},
         {Name: "Peabody Energy"},
         {Name: "Penske Automotive Group"},
         {Name: "PepsiCo"},
         {Name: "Performance Food Group"},
         {Name: "Peter Kiewit Sons'"},
         {Name: "Pfizer"},
         {Name: "Philip Morris International"},
         {Name: "Phillips 66"},
         {Name: "Pioneer Natural Resources"},
         {Name: "Plains GP Holdings"},
         {Name: "Polaris Industries"},
         {Name: "Post Holdings"},
         {Name: "Principal Financial"},
         {Name: "Procter & Gamble"},
         {Name: "Progressive"},
         {Name: "Prudential Financial"},
         {Name: "Public Service Enterprise Group"},
         {Name: "Publix Super Markets"},
         {Name: "PulteGroup"},
         {Name: "Qualcomm"},
         {Name: "Quanta Services"},
         {Name: "Quest Diagnostics"},
         {Name: "Qurate Retail"},
         {Name: "R.R. Donnelley & Sons"},
         {Name: "Ralph Lauren"},
         {Name: "Raymond James Financial"},
         {Name: "Raytheon"},
         {Name: "Realogy Holdings"},
         {Name: "Regeneron Pharmaceuticals"},
         {Name: "Regions Financial"},
         {Name: "Reinsurance Group of America"},
         {Name: "Reliance Steel & Aluminum"},
         {Name: "Republic Services"},
         {Name: "Rite Aid"},
         {Name: "Robert Half International"},
         {Name: "Rockwell Automation"},
         {Name: "Rockwell Collins"},
         {Name: "Ross Stores"},
         {Name: "Ryder System"},
         {Name: "S&P Global"},
         {Name: "SalesForce.com"},
         {Name: "Sanmina"},
         {Name: "Seaboard"},
         {Name: "Sempra Energy"},
         {Name: "Sherwin-Williams"},
         {Name: "Simon Property Group"},
         {Name: "Sonic Automotive"},
         {Name: "Southern"},
         {Name: "Southwest Airlines"},
         {Name: "SpartanNash"},
         {Name: "Spirit AeroSystems Holdings"},
         {Name: "Stanley Black & Decker"},
         {Name: "Starbucks"},
         {Name: "State Farm Insurance"},
         {Name: "State Street Corp."},
         {Name: "Steel Dynamics"},
         {Name: "Stryker"},
         {Name: "SunTrust Banks"},
         {Name: "Supervalu"},
         {Name: "Synchrony Financial"},
         {Name: "Synnex"},
         {Name: "Sysco"},
         {Name: "TIAA"},
         {Name: "TJX"},
         {Name: "Tapestry"},
         {Name: "Targa Resources"},
         {Name: "Target"},
         {Name: "Tech Data"},
         {Name: "Tenet Healthcare"},
         {Name: "Tenneco"},
         {Name: "Tesla"},
         {Name: "Texas Instruments"},
         {Name: "Textron"},
         {Name: "Thermo Fisher Scientific"},
         {Name: "Thor Industries"},
         {Name: "Thrivent Financial for Lutherans"},
         {Name: "Toll Brothers"},
         {Name: "Tractor Supply"},
         {Name: "TravelCenters of America"},
         {Name: "Travelers"},
         {Name: "TreeHouse Foods"},
         {Name: "Twenty-First Century Fox"},
         {Name: "Tyson Foods"},
         {Name: "U.S. Bancorp"},
         {Name: "UGI"},
         {Name: "US Foods Holding"},
         {Name: "USAA"},
         {Name: "Ulta Beauty"},
         {Name: "Union Pacific"},
         {Name: "United Continental Holdings"},
         {Name: "United Natural Foods"},
         {Name: "United Parcel Service"},
         {Name: "United Rentals"},
         {Name: "United States Steel"},
         {Name: "United Technologies"},
         {Name: "UnitedHealth Group"},
         {Name: "Univar"},
         {Name: "Universal Health Services"},
         {Name: "Unum Group"},
         {Name: "VF"},
         {Name: "Valero Energy"},
         {Name: "Veritiv"},
         {Name: "Verizon Communications"},
         {Name: "Viacom"},
         {Name: "Visa"},
         {Name: "Vistra Energy"},
         {Name: "Voya Financial"},
         {Name: "W.R. Berkley"},
         {Name: "W.W. Grainger"},
         {Name: "WEC Energy Group"},
         {Name: "WESCO International"},
         {Name: "Walgreens Boots Alliance"},
         {Name: "Walmart"},
         {Name: "Walt Disney"},
         {Name: "Waste Management"},
         {Name: "Wayfair"},
         {Name: "WellCare Health Plans"},
         {Name: "Wells Fargo"},
         {Name: "WestRock"},
         {Name: "Western & Southern Financial Group"},
         {Name: "Western Digital"},
         {Name: "Western Union"},
         {Name: "Westlake Chemical"},
         {Name: "Weyerhaeuser"},
         {Name: "Whirlpool"},
         {Name: "Williams"},
         {Name: "Williams-Sonoma"},
         {Name: "Windstream Holdings"},
         {Name: "World Fuel Services"},
         {Name: "Wynn Resorts"},
         {Name: "XPO Logistics"},
         {Name: "Xcel Energy"},
         {Name: "Xerox"},
         {Name: "Yum Brands"},
         {Name: "Yum China Holdings"},
         {Name: "Zimmer Biomet Holdings"},
         {Name: "Zoetis"}
      ],
      List: [],

      // *** Companies.Init - Initialize Companies System *********************************************
      // ***    Keywords: //Companies.Init//Companies_Init////init//
      Init: () => {console.log ("f: Companies.Init:");
         Companies.List = Companies.BaseList;
         Companies.UpdateList();
         Companies.UpdateMRU(); // Update MRU List First Time
        },

      // Companies.ResetListSize - Reset Page Size
      ResetListSize: (nListSize) => { console.log ("f: Companies.ResetListSize => " + (Companies.MaxIx + 1) + " Items)");
         Companies.ListSize = nListSize;        // Companies.ListSize     : (RESET) Items Per Page
         // Size of ("n/10" inches) / (10_List_Items.height)
         document.getElementById("Inject_Companies_List").style.height = Math.floor(nListSize/10/0.539+.5)+"in";
         Companies.Init();
         Companies.UpdateList();
         },

      // Companies.ResetRecentItems - Reset Page Size //Recent//
      ResetRecentItems: (nRecentItems) => { console.log ("f: Companies.ResetRecentItems => " + (Companies.MaxIx + 1) + " Items)");
// not used
         Companies.RecentItems = nRecentItems;        // Companies.RecentItems     : (RESET) Items Per Page
         // Size of ("n/10" inches) / (10_List_Items.height)
         document.getElementById("Inject_Companies_List").style.height = Math.floor(nRecentItems/10/0.539+.5)+"in";
         Companies.Init();
         Companies.UpdateList();
         },

      // Companies.MakeRolodex - Create Rolodex (by Page Numbers) // /ROLODEX /Make
      MakeRolodex: () => { // console.log ("f: MakeRolodex")
         var xList = "";
         xModel = document.getElementById("Companies_Rolodex_Template").innerHTML;
         xTemplate = "";
         xTemplate = xTemplate + xModel;
         // Template:
         //   <template id="Companies_Rolodex_Template">
         //      <button class="hxButtonSmall hx3D inline"
         //         onclick="Companies.Click_Rolodex(event)"
         //         id="Companies_$i$">$i$
         //      </button>
         //   </template>
         // console.log (xTemplate);
         for (i = 0; i < Companies.MaxPage; i++)
            {
               xThisModel = xTemplate.replace("TOKEN_SPACE", Companies.List[i].Name);
               xThisModel = xThisModel.replace("$i$",i+1); // First
               xThisModel = xThisModel.replace("$i$",i+1); // Second
               xRolodex = xThisModel
               xList = xList + xRolodex;
            }
         // console.log (xList);
         document.getElementById("id_Companies_Rolodex").innerHTML = xList;
         },

      // *** Point to the Page indicated by the Rolodex Button that was pressed ******************
      // Companies.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => {console.log ("f: Companies.Click_Rolodex:");
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "Companies_n"
         me_Page = xSplit [1];
         Companies.BegIx = (me_Page - 1) * Companies.ListSize;
         Companies.UpdateList();
       },

      // Build Company List from Array //Companies.UpdateList//
      UpdateList: () => { console.log ("f: Companies.UpdateList:")
         document.getElementById("Inject_Companies_Count").innerHTML = " (" + (Companies.List.length + 1) + " Items)"
         select = document.getElementById("Inject_Companies_List");
         xSelect = Companies.List.map
            ( (e,ix) =>
               `
               <option class="hxPagingList inline" id="Click_Companies_List ${ix}">
                  ${e.Name}
               </option>
               `
            ).join('');
         select.innerHTML = xSelect;
         },

      //Companies.UpdateMRU//UpdateMRU//
      UpdateMRU:() => {
         // Update Recent Companies MRU Section (even if not visible)
         xSetting = ReadSetting ("Companies.MRU");
            if (xSetting == null) {xSetting = ""};
         xTemp = xSetting.split("|");
         xPrefix = `<button class="hxInsetCardButton" style="width: 1.8in;">Recent Companies</button>`
         xSelect = xTemp.map
            ( (e,ix) =>
               `
               <button class="hxWhiteCardButton"
                  style="text-align: left; align-items:stretch; justify-content: space-between; flex-basis: auto; width: 1.8in; height: auto;"
                  title="Click_MRU ${ix}"
                  id="Click_MRU ${ix}">
                  <img src="./Images/Cancel.bmp" width=12px; height=12px;>&nbsp;
                  ${e}
               </button>
               `
            ).join('');
         document.getElementById("Recent_Companies_Section").innerHTML = xPrefix + xSelect;
         },
      }

// *** End of Click_Companies_List **************************************************************************************


// *** Roles Section *** //Roles// //Roles_OBJECT// **********************************************************************
var Roles =
   { // /here
      BegIx: 0,            // Roles.BegIx        : Starting Index for data paging (index range varies)
      EndIx: 0,            // Roles.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Roles.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      ListSize: 20,        // Roles.ListSize     : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Roles.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Roles.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
//      MaxHeight: 0,        // Roles.MaxHeight    : Height Flag to maintain size on last Page
      // FilterText: "",

      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      // Filtered_List: [] // Array holding Filtered Array Items (Filter, Future)

      // Roles.List    // Original Array containing Name and URL of Internet Roles (from MS Edge export)
// ... Roles.List[index].Checked = true;
      BaseList: [ // Roles.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
         {Name: "* (I.T.) Backend Developer"},
         {Name: "* (I.T.) Business Analyst"},
         {Name: "* (I.T.) Computer Service Technician"},
         {Name: "* (I.T.) Cyber Security Specialist"},
         {Name: "* (I.T.) Data Analyst"},
         {Name: "* (I.T.) Data Conversion (ETL)"},
         {Name: "* (I.T.) Data Scientist"},
         {Name: "* (I.T.) Database Administrator"},
         {Name: "* (I.T.) Database Analyst"},
         {Name: "* (I.T.) Frontend Developer"},
         {Name: "* (I.T.) Full Stack Developer"},
         {Name: "* (I.T.) Hardware Engineer"},
         {Name: "* (I.T.) I.T. Consultant"},
         {Name: "* (I.T.) I.T. Manager"},
         {Name: "* (I.T.) Multimedia Developer"},
         {Name: "* (I.T.) Network Administrator"},
         {Name: "* (I.T.) Network Engineer"},
         {Name: "* (I.T.) Programmer"},
         {Name: "* (I.T.) Programmer Analyst"},
         {Name: "* (I.T.) Project Manager"},
         {Name: "* (I.T.) SQL Developer"},
         {Name: "* (I.T.) Software Analyst"},
         {Name: "* (I.T.) Software Developer"},
         {Name: "* (I.T.) Systems Administrator"},
         {Name: "* (I.T.) Systems Analyst"},
         {Name: "* (I.T.) Systems Engineer"},
         {Name: "* (I.T.) Systems Programmer"},
         {Name: "* (I.T.) Tech Support"},
         {Name: "* (I.T.) Technical Writer"},
         {Name: "* (I.T.) Web Designers"},
         {Name: "* (I.T.) Web Developer"},
         // Retrieve from uncredited site //
         {Name: "Abstracters"},
         {Name: "Accountants"},
         {Name: "Acupuncturists"},
         {Name: "Agricultural engineers"},
         {Name: "Aircraft and civil aviation mechanics"},
         {Name: "Alcohol and drug counselors"},
         {Name: "Architects"},
         {Name: "Architectural engineers"},
         {Name: "Asbestos workers"},
         {Name: "Athlete agents"},
         {Name: "Athletic coaches"},
         {Name: "Athletic trainers"},
         {Name: "Attorneys"},
         {Name: "Audiologists"},
         {Name: "Audiology or speech-language pathology assistants"},
         {Name: "Bank executive officers"},
         {Name: "Barbers"},
         {Name: "Barber instructors"},
         {Name: "Bill and account collectors"},
         {Name: "Body branders"},
         {Name: "Body piercers"},
         {Name: "Boiler and pressure vessel inspectors"},
         {Name: "Boxers and seconds"},
         {Name: "Boxing promoters"},
         {Name: "Broker-dealer agents"},
         {Name: "Broker-dealers"},
         {Name: "Bulk milk haulers and samplers"},
         {Name: "Certified legal video specialists"},
         {Name: "Certified special population specialists"},
         {Name: "Chemical engineers"},
         {Name: "Chiropractors"},
         {Name: "Civil engineers"},
         {Name: "Clinical nurse specialists"},
         {Name: "Commercial dog or cat breeders"},
         {Name: "Commercial dog or cat dealers"},
         {Name: "Contractors and subcontractors"},
         {Name: "Control systems engineers"},
         {Name: "Cosmetologists"},
         {Name: "Cosmetology instructors"},
         {Name: "Counselors"},
         {Name: "County assessors"},
         {Name: "County highway and city street superintendents"},
         {Name: "Court reporters"},
         {Name: "Credit counselors"},
         {Name: "Credit union loan officers"},
         {Name: "Dental assistants"},
         {Name: "Dental hygienists"},
         {Name: "Dentists"},
         {Name: "Driver safety course instructors"},
         {Name: "Education administrators"},
         {Name: "Electrical and computer engineers"},
         {Name: "Electricians"},
         {Name: "Electrologists"},
         {Name: "Electrology instructors"},
         {Name: "Elementary school teachers"},
         {Name: "Elevator inspectors and elevator inspection supervisors"},
         {Name: "Employment agents"},
         {Name: "Environmental engineers"},
         {Name: "Environmental health specialists"},
         {Name: "Estheticians"},
         {Name: "Esthetician instructors"},
         {Name: "Farm labor contractors"},
         {Name: "Fire alarm inspectors"},
         {Name: "Fire protection engineers"},
         {Name: "Fire sprinkler contractors"},
         {Name: "Fireworks operators"},
         {Name: "Funeral directors and embalmers"},
         {Name: "Genetic counselors"},
         {Name: "Geologists"},
         {Name: "Hearing instrument specialists"},
         {Name: "Horse trainers"},
         {Name: "Industrial engineers"},
         {Name: "Industrial hygienists"},
         {Name: "Insurance producers and consultants"},
         {Name: "Investment advisers and adviser representatives"},
         {Name: "Jockeys"},
         {Name: "Kindergarten teachers"},
         {Name: "Land surveyors"},
         {Name: "Landscape architects"},
         {Name: "Law enforcement officers"},
         {Name: "Lead-based paint licensees"},
         {Name: "Licensed practical nurses"},
         {Name: "Livestock dealers"},
         {Name: "Lobbyists"},
         {Name: "Marriage and family therapists"},
         {Name: "Massage therapists"},
         {Name: "Master plumbers"},
         {Name: "Mechanical engineers"},
         {Name: "Medical nutrition therapists"},
         {Name: "Medication aides"},
         {Name: "Mental health practitioners"},
         {Name: "Metallurgical and materials engineers"},
         {Name: "Middle school teachers"},
         {Name: "Milk producers and field representatives"},
         {Name: "Mining and mineral engineers"},
         {Name: "Mixed martial artists"},
         {Name: "Mortgage loan originators"},
         {Name: "Motor vehicle salespersons"},
         {Name: "Motor vehicle, trailer, and motorcycle dealers"},
         {Name: "Motorcycle-only dealers"},
         {Name: "Nail technicians"},
         {Name: "Nail technology instructors"},
         {Name: "Notaries public"},
         {Name: "Nuclear engineers"},
         {Name: "Nurse anesthetists"},
         {Name: "Nurse midwives"},
         {Name: "Nurse practitioners"},
         {Name: "Nursery stock distributors"},
         {Name: "Nursing assistants"},
         {Name: "Nursing home administrators"},
         {Name: "Occupational therapists"},
         {Name: "Occupational therapy assistants"},
         {Name: "Optometrists"},
         {Name: "Osteopathic physicians and surgeons"},
         {Name: "Out-of-hospital emergency care providers"},
         {Name: "Paid dining assistants"},
         {Name: "Perfusionists"},
         {Name: "Permanent color technicians"},
         {Name: "Personal trainers"},
         {Name: "Pesticide applicators"},
         {Name: "Pesticide dealers"},
         {Name: "Petroleum engineers"},
         {Name: "Pharmacists"},
         {Name: "Pharmacy technicians"},
         {Name: "Physical therapists"},
         {Name: "Physical therapist assistants"},
         {Name: "Physician assistants"},
         {Name: "Physicians and surgeons"},
         {Name: "Pilots"},
         {Name: "Podiatrists"},
         {Name: "Polygraph examiners"},
         {Name: "Private detectives"},
         {Name: "Professional engineers"},
         {Name: "Psychologists"},
         {Name: "Race horse identifiers and tatooers"},
         {Name: "Race horse owners"},
         {Name: "Race horse stable attendants"},
         {Name: "Race track workers"},
         {Name: "Radiographers"},
         {Name: "Radon specialists and technicians"},
         {Name: "Real estate brokers"},
         {Name: "Real estate salespersons"},
         {Name: "Real property appraisers"},
         {Name: "Registered nurses"},
         {Name: "Respiratory care practitioners"},
         {Name: "School counselors"},
         {Name: "Secondary school teachers"},
         {Name: "Sign language interpreters"},
         {Name: "Social workers and master social workers"},
         {Name: "Software engineers"},
         {Name: "Special education teachers"},
         {Name: "Speech-language pathologists"},
         {Name: "Strength and conditioning specialists"},
         {Name: "Structural engineers"},
         {Name: "Surgical first assistants"},
         {Name: "Swimming pool operators"},
         {Name: "Tactical strength and conditioning facilitators"},
         {Name: "Tattoo artists"},
         {Name: "Teachers and substitute teachers"},
         {Name: "Trailer-only dealers"},
         {Name: "Truck drivers for heavy trucks"},
         {Name: "Truck drivers for light and delivery services trucks"},
         {Name: "Veterinarians"},
         {Name: "Veterinary technicians"},
         {Name: "Viatical settlement brokers"},
         {Name: "Vocational education teachers"},
         {Name: "Voice stress examiners"},
         {Name: "Wastewater treatment operators"},
         {Name: "Wastewater treatment system professionals"},
         {Name: "Water treatment plant operators"},
         {Name: "Water well drillers"},
         {Name: "Wrecker and salvage dealers"}
      ],
      List: [],

      // *** Roles.Init - Initialize Roles System *********************************************
      // ***    Keywords: //Roles.Init//Roles_Init////init//
      Init: () => {console.log ("f: Roles.Init:");
         // Roles.List = Roles.BaseList;
         Roles.List =
            Roles.BaseList.sort (function(a, b)
               {
                  var nameA = a.Name.toUpperCase();
                  var nameB = b.Name.toUpperCase();
                  if (nameA < nameB) {return -1;}
                  if (nameA > nameB) {return 1;}
                  return 0;
               }
            );

         Roles.MaxIx = Roles.List.length - 1;
         Roles.MaxPage = Math.floor(Roles.MaxIx / Roles.ListSize) + 1;
//       Roles.MakeRolodex();
         Roles.UpdateList();
         //g_Selected_Role = ""
         //   document.getElementById("Selected_Roles").innerText = g_Selected_Role;
         document.getElementById("id_Roles_Item_Count").innerHTML = " (" + (Roles.MaxIx + 1) + " Items)"
         },

      // Roles.FirstPage - Go to First Page
      // Roles.PrevPage - Go to Previous Page
      // Roles.NextPage - Go to Next Page
      // Roles.LastPage - Go to Last Page
      FirstPage: () => {Roles.BegIx = 0; Roles.UpdateList();},
      PrevPage:  () => {Roles.BegIx = Roles.BegIx - Roles.ListSize; Roles.UpdateList();},
      NextPage:  () => {Roles.BegIx = Roles.BegIx + Roles.ListSize; Roles.UpdateList();},
      LastPage:  () => {Roles.BegIx = (Roles.MaxPage - 1) * Roles.ListSize; Roles.UpdateList();},

      // Roles.ResetListSize - Reset Page Size
      ResetListSize: (nListSize) => { //console.log ("f: Roles.ResetListSize => (Items " + (Roles.BegIx + 1) + "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx + 1) + ")");
         Roles.ListSize = nListSize;        // Roles.ListSize     : (RESET) Items Per Page
         Roles.BegIx = 0,                   // Roles.BegIx      : Starting Index for data paging (index range varies)
         Roles.EndIx = 0,                   // Roles.EndIx        : Ending Index for data paging (index range varies)
         Roles.MaxIx = 0,                   // Roles.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Roles.CurPage = 1,                 // Roles.CurPage      : Current Page Number for data paging (Page Number, varies)
         Roles.MaxPage = 0,                 // Roles.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Roles.MaxHeight = 0,               // Roles.MaxHeight    : Height Flag to maintain size on last Page
         document.getElementById("Inject_Roles_List").style.height = (nListSize/10/0.539)+"in";
         Roles.Init();
         Roles.UpdateList();
         },

      // Roles.MakeRolodex - Create Rolodex (by Page Numbers) // /ROLODEX /Make
      MakeRolodex: () => { // console.log ("f: MakeRolodex")
         var xList = "";
         xModel = document.getElementById("Roles_Rolodex_Template").innerHTML;
         xTemplate = "";
         xTemplate = xTemplate + xModel;
         // Template:
         //   <template id="Roles_Rolodex_Template">
         //      <button class="hxButtonSmall hx3D inline"
         //         onclick="Roles.Click_Rolodex(event)"
         //         id="Roles_$i$">$i$
         //      </button>
         //   </template>
         // console.log (xTemplate);
         for (i = 0; i < Roles.MaxPage; i++)
            {
               xThisModel = xTemplate.replace("Role_NAME_SPACE", Roles.List[i].Name);
               xThisModel = xThisModel.replace("$i$",i+1); // First
               xThisModel = xThisModel.replace("$i$",i+1); // Second
               xRolodex = xThisModel
               xList = xList + xRolodex;
            }
         // console.log (xList);
         document.getElementById("id_Roles_Rolodex").innerHTML = xList;
         },

      // *** Point to the Page indicated by the Rolodex Button that was pressed ******************
      // Roles.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => {console.log ("f: Roles.Click_Rolodex:");
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "Roles_n"
         me_Page = xSplit [1];
         Roles.BegIx = (me_Page - 1) * Roles.ListSize;
         Roles.UpdateList();
       },

      /* *** Update index and vars for Roles (BegIx, EndIx, MaxIx) ************** */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // //Roles.UpdateList// /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdateList: () => { // console.log ("f: UpdateList:")
         // var i;
         if (Roles.BegIx > Roles.MaxIx) {// If index too big, wrap
            Roles.BegIx = 0;
            }
         if (Roles.BegIx < 0) {// If index too small, wrap
            Roles.BegIx = (Roles.MaxPage - 1) * Roles.ListSize;
            }
         Roles.EndIx = Roles.BegIx + Roles.ListSize - 1;
            if (Roles.EndIx > Roles.MaxIx) {// If End index too big, truncate
               Roles.EndIx = Roles.MaxIx;
               }
         Roles.CurPage = Math.floor(Roles.BegIx / Roles.ListSize) + 1;
         Roles.Sliced_List = Roles.List.slice(Roles.BegIx, Roles.EndIx + 1);  // Get part of List => Sliced_List

         pb_PageNo = Math.floor ( (Roles.CurPage / Roles.MaxPage) * 100 + 0.5); // Update Progress Bar
         // ProgressBar("Roles_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Roles_List");
         select.innerHTML = Roles.Sliced_List.map;
         // xSelect = Roles.Sliced_List.map
         xSelect = Roles.List.map
            ( (e,ix) =>
               `
              <option
                  class="hxPagingList inline"
                  id="Click_Roles_List ${Roles.BegIx + ix}"
                  >
                  ${e.Name}
               </option>

/*
               <div
                  class="hxPagingList inline"
                  id="Click_Roles_List ${Roles.BegIx + ix}"
                  role="option"
                  >
                  ${e.Name}
               </div>
*/
               `
            ).join('');
         select.innerHTML = xSelect;
         }
      };
// End of Roles Section




// *** Industries Section *** //Industries// //Industries_OBJECT// **********************************************************************
var Industries =
   { // /here
      BegIx: 0,            // Industries.BegIx        : Starting Index for data paging (index range varies)
      EndIx: 0,            // Industries.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Industries.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      ListSize: 20,        // Industries.ListSize     : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Industries.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Industries.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
//      MaxHeight: 0,        // Industries.MaxHeight    : Height Flag to maintain size on last Page
      // FilterText: "",

      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      // Filtered_List: [] // Array holding Filtered Array Items (Filter, Future)

      BaseList: [ // Industries.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
         {Name: "Accounting"},
         {Name: "Administrative"},
         {Name: "Airline"},
         {Name: "Amusement Park"},
         {Name: "Architecture"},
         {Name: "Armed Forces Job"},
         {Name: "Arts"},
         {Name: "Automotive"},
         {Name: "Banking"},
         {Name: "Bar"},
         {Name: "Biotechnology"},
         {Name: "Book Store"},
         {Name: "Building and Grounds"},
         {Name: "Business"},
         {Name: "Cable"},
         {Name: "Cafe"},
         {Name: "Car Dealership"},
         {Name: "Car Rental"},
         {Name: "Casino"},
         {Name: "Clerical"},
         {Name: "Communication"},
         {Name: "Community Service"},
         {Name: "Computer and Electronics"},
         {Name: "Construction"},
         {Name: "Consulting"},
         {Name: "Cosmetics"},
         {Name: "Cruise Ship"},
         {Name: "Customer Service"},
         {Name: "Daycare"},
         {Name: "Delivery"},
         {Name: "Department Store"},
         {Name: "Design"},
         {Name: "Education"},
         {Name: "En Espanol"},
         {Name: "Engineering"},
         {Name: "Entertainment"},
         {Name: "Equipment Rental"},
         {Name: "Executive"},
         {Name: "Facilities"},
         {Name: "Farming"},
         {Name: "Fashion Retail"},
         {Name: "Fast Food Restaurant"},
         {Name: "Financial Services"},
         {Name: "Financial"},
         {Name: "Fishing"},
         {Name: "Fitness"},
         {Name: "Food Preparation"},
         {Name: "Food Service"},
         {Name: "Forestry"},
         {Name: "Furniture Store"},
         {Name: "Gas Station"},
         {Name: "Government"},
         {Name: "Grocery Store"},
         {Name: "Hair Salon"},
         {Name: "Hardware Store"},
         {Name: "Healthcare"},
         {Name: "Heavy Equipment"},
         {Name: "Home Furnishings"},
         {Name: "Hospitality"},
         {Name: "Hotel"},
         {Name: "Human Resources"},
         {Name: "Ice Cream Shop"},
         {Name: "Information Technology"},
         {Name: "Installation, Maintenance and Repair"},
         {Name: "Insurance"},
         {Name: "Jewelry Store"},
         {Name: "Law Enforcement"},
         {Name: "Legal"},
         {Name: "Library"},
         {Name: "Life Sciences"},
         {Name: "Maid Service"},
         {Name: "Management"},
         {Name: "Manufacturing"},
         {Name: "Marketing"},
         {Name: "Material Moving"},
         {Name: "Math"},
         {Name: "Media"},
         {Name: "Military"},
         {Name: "Movie Theater"},
         {Name: "Office Supply"},
         {Name: "Other"},
         {Name: "Pet Store"},
         {Name: "Pharmacy"},
         {Name: "Physical Sciences"},
         {Name: "Pizza Shop"},
         {Name: "Production"},
         {Name: "Protective Service"},
         {Name: "Public Relations"},
         {Name: "Purchasing"},
         {Name: "Real Estate"},
         {Name: "Resource Care"},
         {Name: "Resource Service"},
         {Name: "Restaurant"},
         {Name: "Retail"},
         {Name: "Sales"},
         {Name: "Science"},
         {Name: "Service"},
         {Name: "Shoe Store"},
         {Name: "Smoothie Shop"},
         {Name: "Social Science"},
         {Name: "Social Service"},
         {Name: "Specialty Food"},
         {Name: "Sporting Goods Store"},
         {Name: "Sports"},
         {Name: "Tanning Salon"},
         {Name: "Telecomm"},
         {Name: "Telecommunications"},
         {Name: "Temp Service"},
         {Name: "Training"},
         {Name: "Transportation"},
         {Name: "Transportation"},
         {Name: "Trucking"},
         {Name: "Tutoring"},
         {Name: "Utility"},
         {Name: "Video Store"},
         {Name: "Warehouse"},
         {Name: "Wholesale"}
         ],
      List: [],

      // *** Industries.Init - Initialize Industries System *********************************************
      // ***    Keywords: //Industries.Init//Industries_Init////init//
      Init: () => {console.log ("f: Industries.Init:");
         Industries.List = Industries.BaseList;
         Industries.MaxIx = Industries.List.length - 1;
         Industries.MaxPage = Math.floor(Industries.MaxIx / Industries.ListSize) + 1;
//       Industries.MakeRolodex();
         Industries.UpdateList();
         //g_Selected_Industry = ""
         //   document.getElementById("Selected_Industries").innerText = g_Selected_Industry;
         },

      // Industries.FirstPage - Go to First Page
      // Industries.PrevPage - Go to Previous Page
      // Industries.NextPage - Go to Next Page
      // Industries.LastPage - Go to Last Page
      FirstPage: () => {Industries.BegIx = 0; Industries.UpdateList();},
      PrevPage:  () => {Industries.BegIx = Industries.BegIx - Industries.ListSize; Industries.UpdateList();},
      NextPage:  () => {Industries.BegIx = Industries.BegIx + Industries.ListSize; Industries.UpdateList();},
      LastPage:  () => {Industries.BegIx = (Industries.MaxPage - 1) * Industries.ListSize; Industries.UpdateList();},

      // Industries.ResetListSize - Reset Page Size
      ResetListSize: (nListSize) => { //console.log ("f: Industries.ResetListSize => (Items " + (Industries.BegIx + 1) + "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx + 1) + ")");
         Industries.ListSize = nListSize;        // Industries.ListSize     : (RESET) Items Per Page
         Industries.BegIx = 0,                 // Industries.BegIx      : Starting Index for data paging (index range varies)
         Industries.EndIx = 0,                   // Industries.EndIx        : Ending Index for data paging (index range varies)
         Industries.MaxIx = 0,                   // Industries.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Industries.CurPage = 1,                 // Industries.CurPage      : Current Page Number for data paging (Page Number, varies)
         Industries.MaxPage = 0,                 // Industries.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Industries.MaxHeight = 0,               // Industries.MaxHeight    : Height Flag to maintain size on last Page
         document.getElementById("Inject_Industries_List").style.height = (nListSize/10/0.539)+"in";
         Industries.Init();
         Industries.UpdateList();
         },

      // Industries.MakeRolodex - Create Rolodex (by Page Numbers) // /ROLODEX /Make
      MakeRolodex: () => { // console.log ("f: MakeRolodex")
         var xList = "";
         xModel = document.getElementById("Industries_Rolodex_Template").innerHTML;
         xTemplate = "";
         xTemplate = xTemplate + xModel;
         // Template:
         //   <template id="Industries_Rolodex_Template">
         //      <button class="hxButtonSmall hx3D inline"
         //         onclick="Industries.Click_Rolodex(event)"
         //         id="Industries_$i$">$i$
         //      </button>
         //   </template>
         // console.log (xTemplate);
         for (i = 0; i < Industries.MaxPage; i++)
            {
               xThisModel = xTemplate.replace("Industry_NAME_SPACE", Industries.List[i].Name);
               xThisModel = xThisModel.replace("$i$",i+1); // First
               xThisModel = xThisModel.replace("$i$",i+1); // Second
               xRolodex = xThisModel
               xList = xList + xRolodex;
            }
         // console.log (xList);
         document.getElementById("id_Industries_Rolodex").innerHTML = xList;
         },

      // *** Point to the Page indicated by the Rolodex Button that was pressed ******************
      // Industries.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => {console.log ("f: Industries.Click_Rolodex:");
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "Industries_n"
         me_Page = xSplit [1];
         Industries.BegIx = (me_Page - 1) * Industries.ListSize;
         Industries.UpdateList();
       },

      /* *** Update index and vars for Industries (BegIx, EndIx, MaxIx) ************** */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // //Industries.UpdateList// /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdateList: () => { // console.log ("f: UpdateList:")
         // var i;
         if (Industries.BegIx > Industries.MaxIx) {// If index too big, wrap
            Industries.BegIx = 0;
            }
         if (Industries.BegIx < 0) {// If index too small, wrap
            Industries.BegIx = (Industries.MaxPage - 1) * Industries.ListSize;
            }
         Industries.EndIx = Industries.BegIx + Industries.ListSize - 1;
            if (Industries.EndIx > Industries.MaxIx) {// If End index too big, truncate
               Industries.EndIx = Industries.MaxIx;
               }
         Industries.CurPage = Math.floor(Industries.BegIx / Industries.ListSize) + 1;
         Industries.Sliced_List = Industries.List.slice(Industries.BegIx, Industries.EndIx + 1);  // Get part of List => Sliced_List

         // pb_PageNo = Math.floor ( (Industries.CurPage / Industries.MaxPage) * 100 + 0.5); // Update Progress Bar
         // ProgressBar("Industries_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Industries_List");
         select.innerHTML = Industries.Sliced_List.map;
         // xSelect = Industries.Sliced_List.map
         xSelect = Industries.List.map
            ( (e,ix) =>
               `

               <option
                  class="hxPagingList inline"
                  id="Click_Industries_List ${Industries.BegIx + ix}"
                  >
                  ${e.Name}
               </option>

/*
               <div
                  class="hxPagingList inline"
                  id="Click_Industries_List ${Industries.BegIx + ix}"
                  role="option"
                  >
                  ${e.Name}
               </div>
*/
               `
            ).join('');

         // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
         /*
         for (i = Industries.Sliced_List.length + 1; i <= Industries.ListSize; i++)
            {
            xThisModel =
               `
               <div class="hxPagingList inline">&nbsp</div>
               `;
            xSelect = xSelect + xThisModel
            }
         */
         select.innerHTML = xSelect;
         // document.getElementById("id_Industries_Pages").innerHTML = " Page " + Industries.CurPage + " of " + Industries.MaxPage + ", ";
         //document.getElementById("id_Industries_Items").innerHTML = " Items " + (Industries.BegIx + 1) +
         //   "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx + 1);
         document.getElementById("id_Industries_Item_Count").innerHTML = " (" + (Industries.MaxIx + 1) + " Items)"
         }
      };
// End of Industries Section




// *** Personal Section *** //Personal// //Personal_OBJECT// **********************************************************************
var Personal =
   { // /here
      BegIx: 0,            // Personal.BegIx        : Starting Index for data paging (index range varies)
      EndIx: 0,            // Personal.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Personal.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      ListSize: 20,        // Personal.ListSize     : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Personal.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Personal.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
//      MaxHeight: 0,        // Personal.MaxHeight    : Height Flag to maintain size on last Page
      // FilterText: "",

      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      // Filtered_List: [] // Array holding Filtered Array Items (Filter, Future)

      BaseList: [ // Personal.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
         {Name: "Business Analyst"},
         {Name: "Data Analyst"},
         {Name: "Technical Writer"},
         {Name: "Farm Bureau Insurance"},
         {Name: "Life Insurance"},
         {Name: "Banking"},
         ],
      List: [],

      // *** Personal.Init - Initialize Personal System *********************************************
      // ***    Keywords: //Personal.Init//Personal_Init////init//
      Init: () => {console.log ("f: Personal.Init:");
         Personal.List = Personal.BaseList;
         Personal.MaxIx = Personal.List.length - 1;
         Personal.MaxPage = Math.floor(Personal.MaxIx / Personal.ListSize) + 1;
//       Personal.MakeRolodex();
         Personal.UpdateList();
         //g_Selected_Personal = ""
         //   document.getElementById("Selected_Personal").innerText = g_Selected_Personal;
         },

      // Personal.FirstPage - Go to First Page
      // Personal.PrevPage - Go to Previous Page
      // Personal.NextPage - Go to Next Page
      // Personal.LastPage - Go to Last Page
      FirstPage: () => {Personal.BegIx = 0; Personal.UpdateList();},
      PrevPage:  () => {Personal.BegIx = Personal.BegIx - Personal.ListSize; Personal.UpdateList();},
      NextPage:  () => {Personal.BegIx = Personal.BegIx + Personal.ListSize; Personal.UpdateList();},
      LastPage:  () => {Personal.BegIx = (Personal.MaxPage - 1) * Personal.ListSize; Personal.UpdateList();},

      // Personal.ResetListSize - Reset Page Size
      ResetListSize: (nListSize) => { //console.log ("f: Personal.ResetListSize => (Items " + (Personal.BegIx + 1) + "-" + (Personal.EndIx+1) + " of " + (Personal.MaxIx + 1) + ")");
         Personal.ListSize = nListSize;        // Personal.ListSize     : (RESET) Items Per Page
         Personal.BegIx = 0,                 // Personal.BegIx      : Starting Index for data paging (index range varies)
         Personal.EndIx = 0,                   // Personal.EndIx        : Ending Index for data paging (index range varies)
         Personal.MaxIx = 0,                   // Personal.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Personal.CurPage = 1,                 // Personal.CurPage      : Current Page Number for data paging (Page Number, varies)
         Personal.MaxPage = 0,                 // Personal.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Personal.MaxHeight = 0,               // Personal.MaxHeight    : Height Flag to maintain size on last Page
         document.getElementById("Inject_Personal_List").style.height = (nListSize/10/0.539)+"in";
         Personal.Init();
         Personal.UpdateList();
         },

      // Personal.MakeRolodex - Create Rolodex (by Page Numbers) // /ROLODEX /Make
      MakeRolodex: () => { // console.log ("f: MakeRolodex")
         var xList = "";
         xModel = document.getElementById("Personal_Rolodex_Template").innerHTML;
         xTemplate = "";
         xTemplate = xTemplate + xModel;
         // Template:
         //   <template id="Personal_Rolodex_Template">
         //      <button class="hxButtonSmall hx3D inline"
         //         onclick="Personal.Click_Rolodex(event)"
         //         id="Personal_$i$">$i$
         //      </button>
         //   </template>
         // console.log (xTemplate);
         for (i = 0; i < Personal.MaxPage; i++)
            {
               xThisModel = xTemplate.replace("Personal_NAME_SPACE", Personal.List[i].Name);
               xThisModel = xThisModel.replace("$i$",i+1); // First
               xThisModel = xThisModel.replace("$i$",i+1); // Second
               xRolodex = xThisModel
               xList = xList + xRolodex;
            }
         // console.log (xList);
         document.getElementById("id_Personal_Rolodex").innerHTML = xList;
         },

      // *** Point to the Page indicated by the Rolodex Button that was pressed ******************
      // Personal.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => {console.log ("f: Personal.Click_Rolodex:");
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "Personal_n"
         me_Page = xSplit [1];
         Personal.BegIx = (me_Page - 1) * Personal.ListSize;
         Personal.UpdateList();
       },

      /* *** Update index and vars for Personal (BegIx, EndIx, MaxIx) ************** */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // //Personal.UpdateList// /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdateList: () => { // console.log ("f: UpdateList:")
         // var i;
         if (Personal.BegIx > Personal.MaxIx) {// If index too big, wrap
            Personal.BegIx = 0;
            }
         if (Personal.BegIx < 0) {// If index too small, wrap
            Personal.BegIx = (Personal.MaxPage - 1) * Personal.ListSize;
            }
         Personal.EndIx = Personal.BegIx + Personal.ListSize - 1;
            if (Personal.EndIx > Personal.MaxIx) {// If End index too big, truncate
               Personal.EndIx = Personal.MaxIx;
               }
         Personal.CurPage = Math.floor(Personal.BegIx / Personal.ListSize) + 1;
         Personal.Sliced_List = Personal.List.slice(Personal.BegIx, Personal.EndIx + 1);  // Get part of List => Sliced_List

         // pb_PageNo = Math.floor ( (Personal.CurPage / Personal.MaxPage) * 100 + 0.5); // Update Progress Bar
         // ProgressBar("Personal_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Personal_List");
         select.innerHTML = Personal.Sliced_List.map;
         // xSelect = Personal.Sliced_List.map
         xSelect = Personal.List.map
            ( (e,ix) =>
               `

               <option
                  class="hxPagingList inline"
                  id="Click_Personal_List ${Personal.BegIx + ix}"
                  >
                  ${e.Name}
               </option>

/*
               <div
                  class="hxPagingList inline"
                  id="Click_Personal_List ${Personal.BegIx + ix}"
                  role="option"
                  >
                  ${e.Name}
               </div>
*/
               `
            ).join('');

         // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
         /*
         for (i = Personal.Sliced_List.length + 1; i <= Personal.ListSize; i++)
            {
            xThisModel =
               `
               <div class="hxPagingList inline">&nbsp</div>
               `;
            xSelect = xSelect + xThisModel
            }
         */
         select.innerHTML = xSelect;
         // document.getElementById("id_Personal_Pages").innerHTML = " Page " + Personal.CurPage + " of " + Personal.MaxPage + ", ";
         //document.getElementById("id_Personal_Items").innerHTML = " Items " + (Personal.BegIx + 1) +
         //   "-" + (Personal.EndIx+1) + " of " + (Personal.MaxIx + 1);
         document.getElementById("id_Personal_Item_Count").innerHTML = " (" + (Personal.MaxIx + 1) + " Items)"
         }
      };
// End of Personal Section





// *** Search List Section *** //Website// //Websites_OBJECT//
var Websites  =
   {
      List: [
         {Name: "All Jobs (LinkedIn)         ", URL: "https://www.linkedin.com/jobs"},
         {Name: "Company Info (Yellow Pages) ", URL: "https://www.whitepages.com/business/KY/Louisville/TOKEN_SPACE"},
         {Name: "Company Info (Indeed)       ", URL: "https://www.indeed.com/cmp/TOKEN_SPACE"},
         {Name: "Company Info (LinkedIn)     ", URL: "https://www.linkedin.com/search/results/all/?keywords=TOKEN_SPACE"},
         {Name: "Company Map (Google, KY)    ", URL: "https://www.google.com/maps/search/&quot;TOKEN_SPACE&quot; in Louisville, KY"},
         {Name: "Company Map (Google, USA)   ", URL: "https://www.google.com/maps/search/&quot;TOKEN_SPACE&quot; in United States"},
         {Name: "Company Review (Indeed)     ", URL: "https://www.indeed.com/cmp/TOKEN_SPACE/reviews?fcountry=ALL"},
         {Name: "Company Review (Yelp, KY)   ", URL: "https://www.yelp.com/search?find_desc=TOKEN_PLUS&find_loc=louisville+ky&ns=1"},
         {Name: "Company Review (Yelp, USA)  ", URL: "https://www.yelp.com/search?find_desc=TOKEN_PLUS&find_loc=United+States&ns=1"},
         {Name: "Company Review (BBB, KY)    ", URL: "https://www.bbb.org/search?find_country=USA&find_loc=louisville%2C%20ky&find_text=TOKEN_20&page=1&sort=Relevance&touched=1"},
         {Name: "People (LinkedIn Resumes)   ", URL: "https://www.linkedin.com/search/results/all/?keywords=Resumes%20at%20TOKEN_20&origin=GLOBAL_Select_HEADER"},
         {Name: "Connections (LinkedIn)      ", URL: "https://www.linkedin.com/search/results/people/?keywords=TOKEN_20&origin=SWITCH_SEARCH_VERTICAL"},
         {Name: "Salaries (Indeed)           ", URL: "https://www.indeed.com/salaries/TOKEN_HYPHEN-Salaries"},
         {Name: "Bing (KY)                   ", URL: "https://www.bing.com/search?q=TOKEN_PLUS+in+Louisville+ky"},
         {Name: "CareerBliss (KY)            ", URL: "https://www.careerbliss.com/search/?q=TOKEN_20&l=Louisville,%20ky&typeFilter=job&sf=true"},
         {Name: "CareerBuilder (KY)          ", URL: "http://www.careerbuilder.com/jobs-TOKEN_HYPHEN-in-Louisville-ky"},
         {Name: "Dice (KY)                   ", URL: "http://www.dice.com/jobs?q=TOKEN_SPACE&l=Louisville+ky"},
         {Name: "FlexJobs (KY)               ", URL: "https://www.flexjobs.com/search?search=&search=TOKEN_PLUS&location=louisville%2C+ky"},
         {Name: "GlassDoor (KY)              ", URL: "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=TOKEN_PLUS&locT=C&locId=1137724&jobType=&context=Jobs&sc.keyword=TOKEN_PLUS&dropdown=0"},
         {Name: "Google (KY)                 ", URL: "https://www.google.com/search?&q=Jobs+at+&quot;TOKEN_PLUS&quot;+in+Louisville+KY"},
         {Name: "Google (USA)                ", URL: "https://www.google.com/search?&q=Jobs+at+&quot;TOKEN_PLUS&quot;+in+United+States"},
         {Name: "Indeed (KY)                 ", URL: "https://www.indeed.com/jobs?q=TOKEN_SPACE&l=Louisville+KY"},
         {Name: "Indeed (USA)                ", URL: "https://www.indeed.com/jobs?q=TOKEN_SPACE&l=United_States"},
         {Name: "JobsGalore (KY)             ", URL: "https://www.jobsgalore.com/jobs?q=Louisville+TOKEN_PLUS+jobs"},
         {Name: "Lensa (KY)                  ", URL: "https://lensa.com/talent/job-opportunities?job-title=TOKEN_PLUS&location=Louisville+ky"},
         {Name: "LinkedIn (KY)               ", URL: "https://www.linkedin.com/jobs/search/?keywords=TOKEN_SPACE&location=Louisville%20Metropolitan%20Area"},
         {Name: "Monster (KY)                ", URL: "https://www.monster.com/jobs/search/?q=TOKEN_HYPHEN&where=Louisville-KY"},
         {Name: "Monster (USA)               ", URL: "https://www.monster.com/jobs/search/?q=TOKEN_HYPHEN&where=United-States"},
         // {Name: "MyJobResource (KY)          ", URL: "https://myjobresource.com/indexjobs.php?k=TOKEN_SPACE&l=Louisville%2C+KY"},
         {Name: "SimplyHired (KY)            ", URL: "http://www.simplyhired.com/search?q=TOKEN_PLUS&l=Louisville+ky"},
         {Name: "StartWire (KY)              ", URL: "https://www.startwire.com/job/search?query=TOKEN_SPACE&location_title=Louisville KY"},
         // {Name: "Yahoo (KY)                  ", URL: "https://search.Yahoo.com/search?p=Jobs at &quot;TOKEN_SPACE&quot; in Louisville, KY"}
         ]
      }



// *** Help Section *** //Help//Help_OBJECT// **********************************************************************
var Help =
   {
   BegIx: 0,            // Help.BegIx        : Starting Index for data paging (index range varies)
   EndIx: 0,            // Help.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Help.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   ListSize: 20,        // Help.ListSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Help.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Help.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Help.MaxHeight    : Height Flag to maintain size on last Page
   // FilterText: "",

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   BaseList: [ // Help.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
      // {Name: "* JobLinks User Guide"}, // Combined into Welcome
      {Name: "* Welcome to JobLinks"},
      {Name: "** Change Log"},
      {Name: "** To Do"},
      {Name: "** Project History"},
      {Name: "About JobLinks"},
      {Name: "List Navigation"},
      {Name: "Link Navigation"},
      {Name: "Select Companies"},
      {Name: "Select Roles"},
      {Name: "Select Industries"},
      {Name: "Select Personal (in progress)"},
      {Name: "Tools"},
      {Name: "Portfolio"},
      {Name: "Programs"},
      {Name: "Writing"},
      {Name: "Help"},
      ],
   List: [],

   // *** Help.Init - Initialize Help System *********************************************
   // ***    Keywords: //Help.Init//Help_Init////init//
   Init: () => {console.log ("f: Help.Init:");
      // Help.List = Help.BaseList;
      Help.List =
         Help.BaseList.sort (function(a, b)
            {
               var nameA = a.Name.toUpperCase();
               var nameB = b.Name.toUpperCase();
               if (nameA < nameB) {return -1;}
               if (nameA > nameB) {return 1;}
               return 0;
            }
         );
      Help.MaxIx = Help.List.length - 1;
      Help.MaxPage = Math.floor(Help.MaxIx / Help.ListSize) + 1;
//       Help.MakeRolodex();
      Help.UpdateList();
      //g_Selected_Help = ""
      //   document.getElementById("Selected_Help").innerText = g_Selected_Help;
      },

      // Help.FirstPage - Go to First Page
      // Help.PrevPage - Go to Previous Page
      // Help.NextPage - Go to Next Page
      // Help.LastPage - Go to Last Page
      FirstPage: () => {Help.BegIx = 0; Help.UpdateList();},
      PrevPage:  () => {Help.BegIx = Help.BegIx - Help.ListSize; Help.UpdateList();},
      NextPage:  () => {Help.BegIx = Help.BegIx + Help.ListSize; Help.UpdateList();},
      LastPage:  () => {Help.BegIx = (Help.MaxPage - 1) * Help.ListSize; Help.UpdateList();},

   // Help.ResetListSize - Reset Page Size
   ResetListSize: (nListSize) => { //console.log ("f: Help.ResetListSize => (Items " + (Help.BegIx + 1) + "-" + (Help.EndIx+1) + " of " + (Help.MaxIx + 1) + ")");
      Help.ListSize = nListSize;        // Help.ListSize     : (RESET) Items Per Page
      Help.BegIx = 0,                 // Help.BegIx      : Starting Index for data paging (index range varies)
      Help.EndIx = 0,                   // Help.EndIx        : Ending Index for data paging (index range varies)
      Help.MaxIx = 0,                   // Help.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      Help.CurPage = 1,                 // Help.CurPage      : Current Page Number for data paging (Page Number, varies)
      Help.MaxPage = 0,                 // Help.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      Help.MaxHeight = 0,               // Help.MaxHeight    : Height Flag to maintain size on last Page
      Help.Init();
      Help.UpdateList();
      },

   /* *** Update index and vars for Help (BegIx, EndIx, MaxIx) ************** */
   /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
   // //Help.UpdateList// /ROLODEX /PAGING
   //Filtered_List: [];
   //Sliced_List: [];
   UpdateList: () => { // console.log ("f: UpdateList:")
      // var i;
      if (Help.BegIx > Help.MaxIx) {// If index too big, wrap
         Help.BegIx = 0;
         }
      if (Help.BegIx < 0) {// If index too small, wrap
         Help.BegIx = (Help.MaxPage - 1) * Help.ListSize;
         }
      Help.EndIx = Help.BegIx + Help.ListSize - 1;
         if (Help.EndIx > Help.MaxIx) {// If End index too big, truncate
            Help.EndIx = Help.MaxIx;
            }
      Help.CurPage = Math.floor(Help.BegIx / Help.ListSize) + 1;
      Help.Sliced_List = Help.List.slice(Help.BegIx, Help.EndIx + 1);  // Get part of List => Sliced_List

      pb_PageNo = Math.floor ( (Help.CurPage / Help.MaxPage) * 100 + 0.5); // Update Progress Bar
      ProgressBar("Help_Progress_Bar", pb_PageNo, "")

      select = document.getElementById("Help_List_Poke");
      select.innerHTML = Help.Sliced_List.map;
      xSelect = Help.Sliced_List.map
         ( (e,ix) =>
            `
            <div
               class="hxPagingList inline"
               id="Click_Help_List ${Help.BegIx + ix}"
               >
               ${e.Name}</div>
            </div>
            `
         ).join('');

      // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
      for (i = Help.Sliced_List.length + 1; i <= Help.ListSize; i++)
         {
         xThisModel =
            `
            <div class="hxPagingList inline">&nbsp</div>
            `;
         xSelect = xSelect + xThisModel
         }
      select.innerHTML = xSelect;
      document.getElementById("id_Help_Pages").innerHTML = " Page " + Help.CurPage + " of " + Help.MaxPage + ", ";
      document.getElementById("id_Help_Items").innerHTML = " Items " + (Help.BegIx + 1) +
         "-" + (Help.EndIx+1) + " of " + (Help.MaxIx + 1);
      }
   };
// End of Help Section

// *** Tools Section *** //Tools//Tools_OBJECT// **********************************************************************
var Tools =
   {
   BegIx: 0,            // Tools.BegIx        : Starting Index for data paging (index range varies)
   EndIx: 0,            // Tools.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Tools.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   ListSize: 20,        // Tools.ListSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Tools.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Tools.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Tools.MaxHeight    : Height Flag to maintain size on last Page
   // FilterText: "",

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   BaseList: [ // Tools.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
      {Name: "CSS Normal Cards"},
      {Name: "CSS Wide Cards"},
      {Name: "CSS Buttons"},
      {Name: "CSS Menu System (old)"},
      {Name: "CSS Buttons with Hover Shadows (old)"},
      {Name: "CSS Experiments"},
      {Name: "Design Models"},
      {Name: "JobList Snapshots"},
      //new//
      ],
   List: [],

   // *** Tools.Init - Initialize Tools System *********************************************
   // ***    Keywords: //Tools.Init//Tools_Init////init//
   Init: () => {console.log ("f: Tools.Init:");
      // Tools.List = Tools.BaseList;
      Tools.List =
         Tools.BaseList.sort (function(a, b)
            {
               var nameA = a.Name.toUpperCase();
               var nameB = b.Name.toUpperCase();
               if (nameA < nameB) {return -1;}
               if (nameA > nameB) {return 1;}
               return 0;
            }
         );
      Tools.MaxIx = Tools.List.length - 1;
      Tools.MaxPage = Math.floor(Tools.MaxIx / Tools.ListSize) + 1;
//       Tools.MakeRolodex();
      Tools.UpdateList();
      //g_Selected_Tools = ""
      //   document.getElementById("Selected_Tools").innerText = g_Selected_Tools;
      },

      // Tools.FirstPage - Go to First Page
      // Tools.PrevPage - Go to Previous Page
      // Tools.NextPage - Go to Next Page
      // Tools.LastPage - Go to Last Page
      FirstPage: () => {Tools.BegIx = 0; Tools.UpdateList();},
      PrevPage:  () => {Tools.BegIx = Tools.BegIx - Tools.ListSize; Tools.UpdateList();},
      NextPage:  () => {Tools.BegIx = Tools.BegIx + Tools.ListSize; Tools.UpdateList();},
      LastPage:  () => {Tools.BegIx = (Tools.MaxPage - 1) * Tools.ListSize; Tools.UpdateList();},

   // Tools.ResetListSize - Reset Page Size
   ResetListSize: (nListSize) => { //console.log ("f: Tools.ResetListSize => (Items " + (Tools.BegIx + 1) + "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx + 1) + ")");
      Tools.ListSize = nListSize;        // Tools.ListSize     : (RESET) Items Per Page
      Tools.BegIx = 0,                 // Tools.BegIx      : Starting Index for data paging (index range varies)
      Tools.EndIx = 0,                   // Tools.EndIx        : Ending Index for data paging (index range varies)
      Tools.MaxIx = 0,                   // Tools.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      Tools.CurPage = 1,                 // Tools.CurPage      : Current Page Number for data paging (Page Number, varies)
      Tools.MaxPage = 0,                 // Tools.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      Tools.MaxHeight = 0,               // Tools.MaxHeight    : Height Flag to maintain size on last Page
      Tools.Init();
      Tools.UpdateList();
      },

   /* *** Update index and vars for Tools (BegIx, EndIx, MaxIx) ************** */
   /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
   // //Tools.UpdateList// /ROLODEX /PAGING
   //Filtered_List: [];
   //Sliced_List: [];
   UpdateList: () => { // console.log ("f: UpdateList:")
      // var i;
      if (Tools.BegIx > Tools.MaxIx) {// If index too big, wrap
         Tools.BegIx = 0;
         }
      if (Tools.BegIx < 0) {// If index too small, wrap
         Tools.BegIx = (Tools.MaxPage - 1) * Tools.ListSize;
         }
      Tools.EndIx = Tools.BegIx + Tools.ListSize - 1;
         if (Tools.EndIx > Tools.MaxIx) {// If End index too big, truncate
            Tools.EndIx = Tools.MaxIx;
            }
      Tools.CurPage = Math.floor(Tools.BegIx / Tools.ListSize) + 1;
      Tools.Sliced_List = Tools.List.slice(Tools.BegIx, Tools.EndIx + 1);  // Get part of List => Sliced_List

      pb_PageNo = Math.floor ( (Tools.CurPage / Tools.MaxPage) * 100 + 0.5); // Update Progress Bar
      ProgressBar("Tools_Progress_Bar", pb_PageNo, "")

      select = document.getElementById("Inject_Tools_List");
      select.innerHTML = Tools.Sliced_List.map;
      xSelect = Tools.Sliced_List.map
         ( (e,ix) =>
            `
            <div
               class="hxPagingList inline"
               id="Click_Tools_List ${Tools.BegIx + ix}"
               >
               ${e.Name}</div>
            </div>
            `
         ).join('');

      // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
      for (i = Tools.Sliced_List.length + 1; i <= Tools.ListSize; i++)
         {
         xThisModel =
            `
            <div class="hxPagingList inline">&nbsp</div>
            `;
         xSelect = xSelect + xThisModel
         }
      select.innerHTML = xSelect;
      document.getElementById("id_Tools_Pages").innerHTML = " Page " + Tools.CurPage + " of " + Tools.MaxPage + ", ";
      document.getElementById("id_Tools_Items").innerHTML = " Items " + (Tools.BegIx + 1) +
         "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx + 1);
      }
   };
// End of Tools Section


// *** //Favorites//Favorites_OBJECT//Favorites_Var// ******************************************************************
var Favorites =
   {
      BegIx: 0,            // Favorites.BegIx        : Starting Index for data paging (index range varies)
      EndIx: 0,            // Favorites.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Favorites.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      ListSize: 20,        // Favorites.ListSize     : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Favorites.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Favorites.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
//      MaxHeight: 0,        // Favorites.MaxHeight    : Height Flag to maintain size on last Page
      // FilterText: "",
      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      // Filtered_List: [] // Array holding Filtered Array Items (Filter, Future)
      // BaseList is the original List, so copies can be sliced or filtered without affecting the original.
      BaseList: [],
      List: [],

      // *** Favorites.Init - Initialize Favorites System *********************************************
      // ***    Keywords: //Favorites.Init//Favorites_Init////init//
      Init: () => {console.log ("f: Favorites.Init:");
         Favorites.BaseList = Create_Favorites_Array(); // From JS File exported from MicroSoft Edge and Excel

         // Add Special Favorites //
         Favorites.BaseList.unshift ({Name: "CSS Gradient Creator (tool)"     , URL: "https://cssgradient.io"});
         Favorites.BaseList.unshift ({Name: "Button Creator (tool)"           , URL: "https://cssbuttoncreator.com"});
         Favorites.BaseList.unshift ({Name: "Character Map (tool)"            , URL: "https://www.online-toolz.com/tools/character-map.php"});
         Favorites.BaseList.unshift ({Name: "Color Mixer (tool)"              , URL: "https://www.w3schools.com/colors/colors_mixer.asp"});
         Favorites.BaseList.unshift ({Name: "Color Converter (tool)"          , URL: "https://www.w3schools.com/colors/colors_converter.asp"});
         Favorites.BaseList.unshift ({Name: "HTML Character Reference (tool)" , URL: "https://dev.w3.org/html5/html-author/charref"});
         Favorites.BaseList.unshift ({Name: "Entity Converter (tool)"         , URL: "https://www.online-toolz.com/tools/text-html-entities-convertor.php"});
         Favorites.BaseList.unshift ({Name: "HTML Form Templates (tool)"      , URL: "https://www.w3docs.com/learn-html/html-form-templates.html"});
         Favorites.BaseList.unshift ({Name: "HTML Formatter (tool)"           , URL: "https://www.freeformatter.com/html-formatter.html"});
         Favorites.BaseList.unshift ({Name: "HTML Page Layouts (tool)"        , URL: "https://www.w3docs.com/learn-html/html-layout-templates.html"});
         Favorites.BaseList.unshift ({Name: "HTML Validator (tool)"           , URL: "https://www.freeformatter.com/html-validator.html"});
         Favorites.BaseList.unshift ({Name: "JavaScript Validator (tool)"     , URL: "http://beautifytools.com/javascript-validator.php"});
         Favorites.BaseList.unshift ({Name: "List of HTML Attributes (tool)"  , URL: "https://www.w3docs.com/learn-html/html-attributes.html"});
         Favorites.BaseList.unshift ({Name: "Selectors Appendix (tool)"       , URL: "https://css-tricks.com/almanac/selectors/n/nth-child"});
         Favorites.BaseList.unshift ({Name: "Tag Cloud Generator (tool)"      , URL: "https://www.online-toolz.com/tools/word-cloud-generator.php"});
         Favorites.BaseList.unshift ({Name: "Text Difference Tool (tool)"     , URL: "https://www.diffchecker.com/diff"});
         Favorites.BaseList.unshift ({Name: "Text to Hex Converter (tool)"    , URL: "https://www.online-toolz.com/tools/text-hex-convertor.php"});
         Favorites.BaseList.unshift ({Name: "Online Tools (tool)"             , URL: "https://www.online-toolz.com"});
         Favorites.BaseList.unshift ({Name: "File Conversions (tool)"         , URL: "http://www.convertcsv.com/html-table-to-csv.htm"});

         // Favorites.List = Favorites.BaseList; // Without Sorting
         // //Favorites.Sort//Sort.Favorites//
         Favorites.List =
            Favorites.BaseList.sort (function(a, b)
               {
                  var nameA = a.Name.toUpperCase();
                  var nameB = b.Name.toUpperCase();
                  if (nameA < nameB) {return -1;}
                  if (nameA > nameB) {return 1;}
                  return 0;
               }
            );
         Favorites.MaxIx = Favorites.List.length - 1;
         Favorites.MaxPage = Math.floor(Favorites.MaxIx / Favorites.ListSize) + 1;
//       Favorites.MakeRolodex();
         Favorites.UpdateList();
         //g_Selected_Favorite = ""
         //   document.getElementById("Selected_Favorites").innerText = g_Selected_Favorite;
         SaveSetting ("Favorites.LastFilter", "none");
         },

      //Favorites.SetFilter//Favorites.SetFilter//SetFilter//Favorites_Filter//filter//
      // Called from Clicking "Favorites_Filter" button
      SetFilter: (pxValue) => {
         document.getElementById("Inject_Favorites_Properties").style.display = "none"; // Force off when setting Filter
         bn_Checked = document.getElementById("Filter_Favorites_URL").checked;
         // if (bn_Checked === true) {gvaSign = "+"} else {gvaSign="-"}
         console.log ("20905: bn_Checked=" + bn_Checked);
         // Show_Main_Sections (gvaChecked);
         // Show_Ids (gvaSign + "All_Section");

         Favorites.List = [];
         let xValue = (pxValue) + "";
         let xValueUpper = xValue.toUpperCase(); // let xValueUpper = xValueSave.toUpperCase();
         if (xValue.length = 0) {console.log ("2073 NULL"); return};
         if (xValueUpper == "*" | xValueUpper == "" | xValueUpper === "")
            {
               Favorites.List = Favorites.BaseList;
               Favorites.BegIx = 0;
               Favorites.MaxIx = Favorites.List.length - 1;
               Favorites.MaxPage = Math.floor(Favorites.MaxIx / Favorites.ListSize) + 1;
               Favorites.UpdateList();
               document.getElementById("Inject_Favorites_Filter").innerHTML = "Off";
               document.getElementById("Inject_Favorites_Status").style.display = "none";
               SaveSetting ("Favorites.LastFilter","none");
               return
            };
         SaveSetting ("Favorites.LastFilter",pxValue);
         // Pull matches from BaseList into List
         nHits = 0;
         // console.log ("2116: xValue=/" + xValue + "/, xValueSave=/" + xValueSave + "/, xValueUpper=/" + xValueUpper + "/");
         for (i = 0; i < Favorites.BaseList.length; i++)
            {
            xName = Favorites.BaseList[i].Name;
            xNameUpper = " " + xName.toUpperCase() + " ";

// if (bn_Checked === true) {gvaSign = "+"} else {gvaSign="-"}

            xURL = Favorites.BaseList[i].URL;
            xURLUpper = " " + xURL.toUpperCase() + " ";
// console.log (xURLUpper)

            xCompare = xNameUpper;
            if (bn_Checked === true) {xCompare = xCompare + " " + xURLUpper};

            xKeywords = Favorites.BaseList[i].Keywords;
            n = xCompare.indexOf(xValueUpper)
            xDelim="■";
            if (n > 0)
               {
                  xActualValue = xName.substring(n-1, n-1 + xValue.length);
                  xName = "BEGIN:" + xName + " ";

                  // Replace First occurrence with Red Version of Search Text
                  xName = xName.replace(xActualValue,xDelim);
                  xName = xName.replace(" " + xDelim + " ","<b style='color:Red; display:inline;'>&nbsp;" + xActualValue + "&nbsp;</b>");
                  xName = xName.replace(" " + xDelim ,"<b style='color:Red; display:inline;'>&nbsp;" + xActualValue + "</b>");
                  xName = xName.replace(xDelim + " ","<b style='color:Red; display:inline;'>" + xActualValue + "&nbsp;</b>");
                  xName = xName.replace(xDelim ,"<b style='color:Red; display:inline;'>" + xActualValue + "</b>");

                  // This handles if string is found in first char => remove extra leading &nbsp;
                  xName = xName.replace("BEGIN:&nbsp;","BEGIN:");
                  xName = xName.replace("BEGIN:","");
                  xName = xName.replace("BEGIN:","");
                  xName = xName.trim();

                  Favorites.List.push ( {Name: xName, URL: xURL, Keywords: xKeywords });
                  nHits = nHits + 1;
               }
            }
         Favorites.BegIx = 0;
         Favorites.MaxIx = Favorites.List.length - 1;
         Favorites.MaxPage = Math.floor(Favorites.MaxIx / Favorites.ListSize) + 1;
         Favorites.UpdateList();
         document.getElementById("Inject_Favorites_Filter").innerHTML =
            "CONTAINS &quot;" + xFilter + "&quot;"
         document.getElementById("Inject_Favorites_Status").style.display = "inline";
         document.getElementById("Inject_Favorites_Status").innerHTML =
            " &#x1405; " + nHits + " Matches out of " + Favorites.BaseList.length;
         return;
      },

      //Favorites.ResetFilter//ResetFilter//filter//
      // Called from Clicking "Reset_Favorites_Filter" button
      ResetFilter: () => {
         Favorites.List = Favorites.BaseList;
//SaveSetting("Favorites.List",Favorites.List);
//xyz = ReadSetting("Favorites.List")
//console.log (xyz);
         Favorites.BegIx = 0;
         Favorites.MaxIx = Favorites.List.length - 1;
         Favorites.MaxPage = Math.floor(Favorites.MaxIx / Favorites.ListSize) + 1;
         Favorites.UpdateList();
         document.getElementById("Inject_Favorites_Filter").innerHTML = "Off";
         document.getElementById("Inject_Favorites_Status").style.display = "none";
         SaveSetting ("Favorites.LastFilter","none")
         return;
         },

      // Favorites.FirstPage - Go to First Page
      // Favorites.PrevPage - Go to Previous Page
      // Favorites.NextPage - Go to Next Page
      // Favorites.LastPage - Go to Last Page
      FirstPage: () => {Favorites.BegIx = 0; Favorites.UpdateList();},
      PrevPage:  () => {Favorites.BegIx = Favorites.BegIx - Favorites.ListSize; Favorites.UpdateList();},
      NextPage:  () => {Favorites.BegIx = Favorites.BegIx + Favorites.ListSize; Favorites.UpdateList();},
      LastPage:  () => {Favorites.BegIx = (Favorites.MaxPage - 1) * Favorites.ListSize; Favorites.UpdateList();},

      // Favorites.ResetListSize - Reset Page Size
      ResetListSize: (nListSize) => { //console.log ("f: Favorites.ResetListSize => (Items " + (Favorites.BegIx + 1) + "-" + (Favorites.EndIx+1) + " of " + (Favorites.MaxIx + 1) + ")");
         Favorites.ListSize = nListSize;        // Favorites.ListSize     : (RESET) Items Per Page
         Favorites.BegIx = 0,                 // Favorites.BegIx      : Starting Index for data paging (index range varies)
         Favorites.EndIx = 0,                   // Favorites.EndIx        : Ending Index for data paging (index range varies)
         Favorites.MaxIx = 0,                   // Favorites.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Favorites.CurPage = 1,                 // Favorites.CurPage      : Current Page Number for data paging (Page Number, varies)
         Favorites.MaxPage = 0,                 // Favorites.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Favorites.MaxHeight = 0,               // Favorites.MaxHeight    : Height Flag to maintain size on last Page
         Favorites.Init();
         Favorites.UpdateList();
         },

      // Favorites.MakeRolodex - Create Rolodex (by Page Numbers) // /ROLODEX /Make
      MakeRolodex: () => { // console.log ("f: MakeRolodex")
         var xList = "";
         xModel = document.getElementById("Favorites_Rolodex_Template").innerHTML;
         xTemplate = "";
         xTemplate = xTemplate + xModel;
         // Template:
         //   <template id="Favorites_Rolodex_Template">
         //      <button class="hxButtonSmall hx3D inline"
         //         onclick="Favorites.Click_Rolodex(event)"
         //         id="Favorites_$i$">$i$
         //      </button>
         //   </template>
         // console.log (xTemplate);
         for (i = 0; i < Favorites.MaxPage; i++)
            {
               xThisModel = xTemplate.replace("TOKEN_SPACE", Favorites.List[i].Name);
               xThisModel = xThisModel.replace("$i$",i+1); // First
               xThisModel = xThisModel.replace("$i$",i+1); // Second
               xRolodex = xThisModel
               xList = xList + xRolodex;
            }
         // console.log (xList);
         document.getElementById("id_Favorites_Rolodex").innerHTML = xList;
         },

      // *** Point to the Page indicated by the Rolodex Button that was pressed ******************
      // Favorites.Click_Rolodex - Click on Rolodex Button //click rolodex //rolodex
      Click_Rolodex: (event) => {console.log ("f: Favorites.Click_Rolodex:");
         var me_Id = event.target.id;
         xSplit = me_Id.split("_"); // Id Format is "Favorites_n"
         me_Page = xSplit [1];
         Favorites.BegIx = (me_Page - 1) * Favorites.ListSize;
         Favorites.UpdateList();
       },

      /* *** Update index and vars for Favorites (BegIx, EndIx, MaxIx) ************** */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // //Favorites.UpdateList// /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdateList: () => { // console.log ("f: UpdateList:")
         // var i;
         if (Favorites.BegIx > Favorites.MaxIx) {// If index too big, wrap
            Favorites.BegIx = 0;
            }
         if (Favorites.BegIx < 0) {// If index too small, wrap
            Favorites.BegIx = (Favorites.MaxPage - 1) * Favorites.ListSize;
            }
         Favorites.EndIx = Favorites.BegIx + Favorites.ListSize - 1;
            if (Favorites.EndIx > Favorites.MaxIx) {// If End index too big, truncate
               Favorites.EndIx = Favorites.MaxIx;
               }
         Favorites.CurPage = Math.floor(Favorites.BegIx / Favorites.ListSize) + 1;
         Favorites.Sliced_List = Favorites.List.slice(Favorites.BegIx, Favorites.EndIx + 1);  // Get part of List => Sliced_List
            // Favorites.Sliced_List.unshift ({Name: "&#x140A; Click Here for Custom Favorite Search &#x1405;"});

         pb_PageNo = Math.floor ( (Favorites.CurPage / Favorites.MaxPage) * 100 + 0.5); // Update Progress Bar
         ProgressBar("Favorites_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Favorites_List");
         select.innerHTML = Favorites.Sliced_List.map;

         xSelect = Favorites.Sliced_List.map
            ( (e,ix) =>
               `
               <div
                  class="hxPagingList inline"
                  style="font-size:0.15in;"
                  id="Click_Favorites_List ${Favorites.BegIx + ix}"
                  >
                  <a href="${e.URL}" target='_blank'>OPEN</a>&nbsp;${e.Name}</div>
               </div>
               `
            ).join('');
// console.log ("2284: " + xSelect)

         // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
         for (i = Favorites.Sliced_List.length + 1; i <= Favorites.ListSize; i++)
            {
            xThisModel = `<div class="hxPagingList inline">&nbsp</div>`;
            xSelect = xSelect + xThisModel
            }

         select.innerHTML = xSelect;
         document.getElementById("id_Favorites_Pages").innerHTML = " Page " + Favorites.CurPage + " of " + Favorites.MaxPage + ", ";
         document.getElementById("id_Favorites_Items").innerHTML = " Items " + (Favorites.BegIx + 1) +
            "-" + (Favorites.EndIx+1) + " of " + (Favorites.MaxIx + 1);
         }
      };
// End of Favorites Section




// *** Portfolio Section *** //Portfolio//Portfolio_OBJECT// **********************************************************************
var Portfolio =
   {
   BegIx: 0,            // Portfolio.BegIx        : Starting Index for data paging (index range varies)
   EndIx: 0,            // Portfolio.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Portfolio.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   ListSize: 20,        // Portfolio.ListSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Portfolio.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Portfolio.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Portfolio.MaxHeight    : Height Flag to maintain size on last Page
   // FilterText: "",

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   BaseList: [ // Portfolio.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
      {Name: "* About Me"},
      {Name: "* Recommendations"},

      {Name: "* Resume - Chronological"},
      {Name: "* Resume - Functional"},
      {Name: "* Resume - Infographic"},

      {Name: "CoreLogic - Summary"},
      {Name: "CoreLogic - Workflow"},

      {Name: "Quilogy - Summary"},
      {Name: "Quilogy - Eclipsys Workflow"},
      {Name: "Quilogy - Leave Request Workflow"},

      {Name: "Ryder - ETL Conversion System"},

      {Name: "SSB - Summary"},

      {Name: "Thomson - Summary"},
      {Name: "Thomson - ETL Flow Chart"},
      {Name: "Thomson - ProSpec: A Case Study"},
      {Name: "Thomson - ProSpec: A Success Story"},
      //new//new portfolio//portfolio//
      ],
   List: [],

//here//
   // *** Portfolio.Init - Initialize Portfolio System *********************************************
   // ***    Keywords: //Portfolio.Init//Portfolio_Init////init//
   Init: () => {console.log ("f: Portfolio.Init:");
      // Portfolio.List = Portfolio.BaseList;
      Portfolio.List =
         Portfolio.BaseList.sort (function(a, b)
            {
               var nameA = a.Name.toUpperCase();
               var nameB = b.Name.toUpperCase();
               if (nameA < nameB) {return -1;}
               if (nameA > nameB) {return 1;}
               return 0;
            }
         );

      Portfolio.MaxIx = Portfolio.List.length - 1;
      Portfolio.MaxPage = Math.floor(Portfolio.MaxIx / Portfolio.ListSize) + 1;
//       Portfolio.MakeRolodex();
      Portfolio.UpdateList();
      //g_Selected_Portfolio = ""
      //   document.getElementById("Selected_Portfolio").innerText = g_Selected_Portfolio;
      },

      // Portfolio.FirstPage - Go to First Page
      // Portfolio.PrevPage - Go to Previous Page
      // Portfolio.NextPage - Go to Next Page
      // Portfolio.LastPage - Go to Last Page
      FirstPage: () => {Portfolio.BegIx = 0; Portfolio.UpdateList();},
      PrevPage:  () => {Portfolio.BegIx = Portfolio.BegIx - Portfolio.ListSize; Portfolio.UpdateList();},
      NextPage:  () => {Portfolio.BegIx = Portfolio.BegIx + Portfolio.ListSize; Portfolio.UpdateList();},
      LastPage:  () => {Portfolio.BegIx = (Portfolio.MaxPage - 1) * Portfolio.ListSize; Portfolio.UpdateList();},

   // Portfolio.ResetListSize - Reset Page Size
   ResetListSize: (nListSize) => { //console.log ("f: Portfolio.ResetListSize => (Items " + (Portfolio.BegIx + 1) + "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx + 1) + ")");
      Portfolio.ListSize = nListSize;        // Portfolio.ListSize     : (RESET) Items Per Page
      Portfolio.BegIx = 0,                 // Portfolio.BegIx      : Starting Index for data paging (index range varies)
      Portfolio.EndIx = 0,                   // Portfolio.EndIx        : Ending Index for data paging (index range varies)
      Portfolio.MaxIx = 0,                   // Portfolio.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      Portfolio.CurPage = 1,                 // Portfolio.CurPage      : Current Page Number for data paging (Page Number, varies)
      Portfolio.MaxPage = 0,                 // Portfolio.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      Portfolio.MaxHeight = 0,               // Portfolio.MaxHeight    : Height Flag to maintain size on last Page
      Portfolio.Init();
      Portfolio.UpdateList();
      },

   /* *** Update index and vars for Portfolio (BegIx, EndIx, MaxIx) ************** */
   /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
   // //Portfolio.UpdateList// /ROLODEX /PAGING
   //Filtered_List: [];
   //Sliced_List: [];
   UpdateList: () => { // console.log ("f: UpdateList:")
      // var i;
      if (Portfolio.BegIx > Portfolio.MaxIx) {// If index too big, wrap
         Portfolio.BegIx = 0;
         }
      if (Portfolio.BegIx < 0) {// If index too small, wrap
         Portfolio.BegIx = (Portfolio.MaxPage - 1) * Portfolio.ListSize;
         }
      Portfolio.EndIx = Portfolio.BegIx + Portfolio.ListSize - 1;
         if (Portfolio.EndIx > Portfolio.MaxIx) {// If End index too big, truncate
            Portfolio.EndIx = Portfolio.MaxIx;
            }
      Portfolio.CurPage = Math.floor(Portfolio.BegIx / Portfolio.ListSize) + 1;
      Portfolio.Sliced_List = Portfolio.List.slice(Portfolio.BegIx, Portfolio.EndIx + 1);  // Get part of List => Sliced_List

      pb_PageNo = Math.floor ( (Portfolio.CurPage / Portfolio.MaxPage) * 100 + 0.5); // Update Progress Bar
      ProgressBar("Portfolio_Progress_Bar", pb_PageNo, "")

      select = document.getElementById("Inject_Portfolio_List");
      select.innerHTML = Portfolio.Sliced_List.map;
      xSelect = Portfolio.Sliced_List.map
         ( (e,ix) =>
            `
            <div
               class="hxPagingList inline"
               id="Click_Portfolio_List ${Portfolio.BegIx + ix}"
               >
               ${e.Name}</div>
            </div>
            `
         ).join('');

      // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
      for (i = Portfolio.Sliced_List.length + 1; i <= Portfolio.ListSize; i++)
         {
         xThisModel =
            `
            <div class="hxPagingList inline">&nbsp</div>
            `;
         xSelect = xSelect + xThisModel
         }
      select.innerHTML = xSelect;
      document.getElementById("id_Portfolio_Pages").innerHTML = " Page " + Portfolio.CurPage + " of " + Portfolio.MaxPage + ", ";
      document.getElementById("id_Portfolio_Items").innerHTML = " Items " + (Portfolio.BegIx + 1) +
         "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx + 1);
      }
   };
// End of Portfolio Section


// *** Programs Section *** //Programs//Programs_OBJECT// **********************************************************************
var Programs =
   {
   BegIx: 0,            // Programs.BegIx        : Starting Index for data paging (index range varies)
   EndIx: 0,            // Programs.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Programs.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   ListSize: 20,        // Programs.ListSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Programs.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Programs.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Programs.MaxHeight    : Height Flag to maintain size on last Page
   // FilterText: "",

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   BaseList: [ // Programs.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
      {Name: "GraphToData"},
      {Name: "JobLinks"},
      {Name: "JobList"},
      {Name: "JobEx"},
      {Name: "List_Compare"},
      {Name: "ProSpec ETL System"},
      {Name: "Proviso Job Requirements Comparison"},
      // {Name: "JobEx (Calendar Tracking)"},
  //new//
/*
      {Name: "Macro Maintenance"},
      {Name: "File Maintenance"},
      {Name: "Command-Line Interface"},
      {Name: "Smart Search Function"},
      {Name: "Sodoku Solver"},
  */
      ],
   List: [],

//here//
   // *** Programs.Init - Initialize Programs System *********************************************
   // ***    Keywords: //Programs.Init//Programs_Init////init//
   Init: () => {console.log ("f: Programs.Init:");
      // Programs.List = Programs.BaseList; // Original, without Sort
      Programs.List =
         Programs.BaseList.sort (function(a, b)
            {
               var nameA = a.Name.toUpperCase();
               var nameB = b.Name.toUpperCase();
               if (nameA < nameB) {return -1;}
               if (nameA > nameB) {return 1;}
               return 0;
            }
         );
      // Programs.List = SortArrayByName(Programs.BaseList); // This fails

      Programs.MaxIx = Programs.List.length - 1;
      Programs.MaxPage = Math.floor(Programs.MaxIx / Programs.ListSize) + 1;
//       Programs.MakeRolodex();
      Programs.UpdateList();
      //g_Selected_Programs = ""
      //   document.getElementById("Selected_Programs").innerText = g_Selected_Programs;
      },

      // Programs.FirstPage - Go to First Page
      // Programs.PrevPage - Go to Previous Page
      // Programs.NextPage - Go to Next Page
      // Programs.LastPage - Go to Last Page
      FirstPage: () => {Programs.BegIx = 0; Programs.UpdateList();},
      PrevPage:  () => {Programs.BegIx = Programs.BegIx - Programs.ListSize; Programs.UpdateList();},
      NextPage:  () => {Programs.BegIx = Programs.BegIx + Programs.ListSize; Programs.UpdateList();},
      LastPage:  () => {Programs.BegIx = (Programs.MaxPage - 1) * Programs.ListSize; Programs.UpdateList();},

   // Programs.ResetListSize - Reset Page Size
   ResetListSize: (nListSize) => { //console.log ("f: Programs.ResetListSize => (Items " + (Programs.BegIx + 1) + "-" + (Programs.EndIx+1) + " of " + (Programs.MaxIx + 1) + ")");
      Programs.ListSize = nListSize;        // Programs.ListSize     : (RESET) Items Per Page
      Programs.BegIx = 0,                 // Programs.BegIx      : Starting Index for data paging (index range varies)
      Programs.EndIx = 0,                   // Programs.EndIx        : Ending Index for data paging (index range varies)
      Programs.MaxIx = 0,                   // Programs.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      Programs.CurPage = 1,                 // Programs.CurPage      : Current Page Number for data paging (Page Number, varies)
      Programs.MaxPage = 0,                 // Programs.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      Programs.MaxHeight = 0,               // Programs.MaxHeight    : Height Flag to maintain size on last Page
      Programs.Init();
      Programs.UpdateList();
      },

   /* *** Update index and vars for Programs (BegIx, EndIx, MaxIx) ***************** */
   /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
   // //Programs.UpdateList// /ROLODEX /PAGING
   //Filtered_List: [];
   //Sliced_List: [];
   UpdateList: () => { // console.log ("f: UpdateList:")
      // var i;
      if (Programs.BegIx > Programs.MaxIx) {// If index too big, wrap
         Programs.BegIx = 0;
         }
      if (Programs.BegIx < 0) {// If index too small, wrap
         Programs.BegIx = (Programs.MaxPage - 1) * Programs.ListSize;
         }
      Programs.EndIx = Programs.BegIx + Programs.ListSize - 1;
         if (Programs.EndIx > Programs.MaxIx) {// If End index too big, truncate
            Programs.EndIx = Programs.MaxIx;
            }
      Programs.CurPage = Math.floor(Programs.BegIx / Programs.ListSize) + 1;
      Programs.Sliced_List = Programs.List.slice(Programs.BegIx, Programs.EndIx + 1);  // Get part of List => Sliced_List

      pb_PageNo = Math.floor ( (Programs.CurPage / Programs.MaxPage) * 100 + 0.5); // Update Progress Bar
      ProgressBar("Programs_Progress_Bar", pb_PageNo, "")

      select = document.getElementById("Inject_Programs_List");
      select.innerHTML = Programs.Sliced_List.map;
      xSelect = Programs.Sliced_List.map
         ( (e,ix) =>
            `
            <div
               class="hxPagingList inline"
               id="Click_Programs_List ${Programs.BegIx + ix}"
               >
               ${e.Name}</div>
            </div>
            `
         ).join('');

      // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
      for (i = Programs.Sliced_List.length + 1; i <= Programs.ListSize; i++)
         {
         xThisModel =
            `
            <div class="hxPagingList inline">&nbsp</div>
            `;
         xSelect = xSelect + xThisModel
         }
      select.innerHTML = xSelect;
      document.getElementById("id_Programs_Pages").innerHTML = " Page " + Programs.CurPage + " of " + Programs.MaxPage + ", ";
      document.getElementById("id_Programs_Items").innerHTML = " Items " + (Programs.BegIx + 1) +
         "-" + (Programs.EndIx+1) + " of " + (Programs.MaxIx + 1);
      }
   };
// End of Programs Section

// *** Writing Section *** //Writing//Writing_OBJECT// **********************************************************************
var Writing =
   {
   BegIx: 0,            // Writing.BegIx        : Starting Index for data paging (index range varies)
   EndIx: 0,            // Writing.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Writing.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   ListSize: 20,        // Writing.ListSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Writing.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Writing.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Writing.MaxHeight    : Height Flag to maintain size on last Page
   // FilterText: "",

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   BaseList: [ // Writing.BaseList is the original List, so copies can be sliced or filtered without affecting the original.
      {Name: "Gamification (2020)"},
      {Name: "Career Elements (2019)"},
      {Name: "Crowd Sourcing (2019)"},
      {Name: "Mystery Elements (2017)"},
      {Name: "Cultural Stories (2016)"},
      {Name: "Guidebook to Life on Earth (2016)"},
      {Name: "Social Engineering (2016)"},
      {Name: "Steganography (2014)"},
      {Name: "The Detective 12 Novels (2013)"},
      {Name: "Story Elements (2012)"},
      {Name: "* Patent #6137478 (2000)"},
      {Name: "* Graphics Contest: Abbi's Room"},
      {Name: "* Graphics Contest: Making of Abbi's Room"},
//new//
      ],
   List: [],

//here//
   // *** Writing.Init - Initialize Writing System *********************************************
   // ***    Keywords: //Writing.Init//Writing_Init////init//
   Init: () => {console.log ("f: Writing.Init:");
      // Writing.List = Writing.BaseList; // Original, without Sort
      Writing.List =
         Writing.BaseList.sort (function(a, b)
            {
               var nameA = a.Name.toUpperCase();
               var nameB = b.Name.toUpperCase();
               if (nameA < nameB) {return -1;}
               if (nameA > nameB) {return 1;}
               return 0;
            }
         );
      // Writing.List = SortArrayByName(Writing.BaseList); // This fails

      Writing.MaxIx = Writing.List.length - 1;
      Writing.MaxPage = Math.floor(Writing.MaxIx / Writing.ListSize) + 1;
//       Writing.MakeRolodex();
      Writing.UpdateList();
      //g_Selected_Writing = ""
      //   document.getElementById("Selected_Writing").innerText = g_Selected_Writing;
      },

      // Writings.FirstPage - Go to First Page
      // Writings.PrevPage - Go to Previous Page
      // Writings.NextPage - Go to Next Page
      // Writings.LastPage - Go to Last Page
      FirstPage: () => {Writings.BegIx = 0; Writings.UpdateList();},
      PrevPage:  () => {Writings.BegIx = Writings.BegIx - Writings.ListSize; Writings.UpdateList();},
      NextPage:  () => {Writings.BegIx = Writings.BegIx + Writings.ListSize; Writings.UpdateList();},
      LastPage:  () => {Writings.BegIx = (Writings.MaxPage - 1) * Writings.ListSize; Writings.UpdateList();},

   // Writing.ResetListSize - Reset Page Size
   ResetListSize: (nListSize) => { //console.log ("f: Writing.ResetListSize => (Items " + (Writing.BegIx + 1) + "-" + (Writing.EndIx+1) + " of " + (Writing.MaxIx + 1) + ")");
      Writing.ListSize = nListSize;        // Writing.ListSize     : (RESET) Items Per Page
      Writing.BegIx = 0,                 // Writing.BegIx      : Starting Index for data paging (index range varies)
      Writing.EndIx = 0,                   // Writing.EndIx        : Ending Index for data paging (index range varies)
      Writing.MaxIx = 0,                   // Writing.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      Writing.CurPage = 1,                 // Writing.CurPage      : Current Page Number for data paging (Page Number, varies)
      Writing.MaxPage = 0,                 // Writing.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      Writing.MaxHeight = 0,               // Writing.MaxHeight    : Height Flag to maintain size on last Page
      Writing.Init();
      Writing.UpdateList();
      },

   /* *** Update index and vars for Writing (BegIx, EndIx, MaxIx) ***************** */
   /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
   // //Writing.UpdateList// /ROLODEX /PAGING
   //Filtered_List: [];
   //Sliced_List: [];
   UpdateList: () => { // console.log ("f: UpdateList:")
      // var i;
      if (Writing.BegIx > Writing.MaxIx) {// If index too big, wrap
         Writing.BegIx = 0;
         }
      if (Writing.BegIx < 0) {// If index too small, wrap
         Writing.BegIx = (Writing.MaxPage - 1) * Writing.ListSize;
         }
      Writing.EndIx = Writing.BegIx + Writing.ListSize - 1;
         if (Writing.EndIx > Writing.MaxIx) {// If End index too big, truncate
            Writing.EndIx = Writing.MaxIx;
            }
      Writing.CurPage = Math.floor(Writing.BegIx / Writing.ListSize) + 1;
      Writing.Sliced_List = Writing.List.slice(Writing.BegIx, Writing.EndIx + 1);  // Get part of List => Sliced_List

      pb_PageNo = Math.floor ( (Writing.CurPage / Writing.MaxPage) * 100 + 0.5); // Update Progress Bar
      ProgressBar("Writing_Progress_Bar", pb_PageNo, "")

      select = document.getElementById("Inject_Writing_List");
      select.innerHTML = Writing.Sliced_List.map;
      xSelect = Writing.Sliced_List.map
         ( (e,ix) =>
            `
            <div
               class="hxPagingList inline"
               id="Click_Writing_List ${Writing.BegIx + ix}"
               >
               ${e.Name}</div>
            </div>
            `
         ).join('');

      // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
      for (i = Writing.Sliced_List.length + 1; i <= Writing.ListSize; i++)
         {
         xThisModel =
            `
            <div class="hxPagingList inline">&nbsp</div>
            `;
         xSelect = xSelect + xThisModel
         }
      select.innerHTML = xSelect;
      document.getElementById("id_Writing_Pages").innerHTML = " Page " + Writing.CurPage + " of " + Writing.MaxPage + ", ";
      document.getElementById("id_Writing_Items").innerHTML = " Items " + (Writing.BegIx + 1) +
         "-" + (Writing.EndIx+1) + " of " + (Writing.MaxIx + 1);
      }
   };
// End of Writing Section

//New//New Sections//New Tabs//New_Sections//New_Tabs//


// ProgressBar - Modifies an element for use as a ProgressBar ***********************************************************
//    Keywords: //jacoons//progress//bar//progress bar//ProgressBar//
//
// History:
//    08/01/2020 v01 Written by James Coons.
//    09/30/2020 v02 Tweaked (style: Left-Green, Right-Red).
function ProgressBar(pxId, pnPercent, pxText) {
   nDisplay = Math.floor(pnPercent + 0.5)
      if (nDisplay < 0) {nDisplay = 0};
      if (nDisplay > 100) {nDisplay = 100};
   xColor1 = "rgb(0,144,0)"; // "DarkGreen";
   xColor2 = "rgb(128,0,0)"; // "DarkRed";
   xMeterStyle = "linear-gradient(to right, COLOR1 0%, COLOR1 XX%, COLOR2 XX%, COLOR2 100%)";
   xMeterStyle = xMeterStyle.replace("XX", pnPercent);
   xMeterStyle = xMeterStyle.replace("XX", pnPercent);
   xMeterStyle = xMeterStyle.replace("COLOR1", xColor1);
   xMeterStyle = xMeterStyle.replace("COLOR1", xColor1);
   xMeterStyle = xMeterStyle.replace("COLOR2", xColor2);
   xMeterStyle = xMeterStyle.replace("COLOR2", xColor2);
   // console.log (xMeterStyle);
   document.getElementById(pxId).style.backgroundImage = xMeterStyle;
   if (pxText != "")
      {document.getElementById(pxId).innerHTML = nDisplay + "%"}
   }
// /ProgressBar *********************************************************************************************************

// console.log ("@676: Here");

// //Init//App_Init// ******************************************* ******************************************************
   document.getElementById("View_All_Sections").checked   = false;
   document.getElementById("Inject_Companies_Heading").innerHTML  = "&#x1405; Select a Company or enter a value.";
   document.getElementById("Inject_Roles_Heading").innerHTML      = "&#x1405; Select a Role or enter a value.";
   document.getElementById("Inject_Industries_Heading").innerHTML = "&#x1405; Select an Industry or enter a value.";
   document.getElementById("Inject_Personal_Heading").innerHTML   = "&#x1405; Select a Personal Item or enter a value.";
   document.getElementById("Inject_Portfolio_Heading").innerHTML  = "&#x1405; Select a Portfolio Item.";
   document.getElementById("Inject_Programs_Heading").innerHTML   = "&#x1405; Select a Programming Project.";
   document.getElementById("Inject_Writing_Heading").innerHTML    = "&#x1405; Select a Writing Project.";
   document.getElementById("Inject_Tools_Heading").innerHTML      = "&#x1405; Select a Tool.";
// document.getElementById("Inject_Favorites_Heading").innerHTML  = "&#x1405; Select a Favorite or enter any value [BLURB FIX].";
   document.getElementById("Inject_Help_Heading").innerHTML       = "&#x1405; Select a Help Topic.";

   Show_Main_Sections (false);         // Hide Main Sections
   if (g_Default_Section != "") {Show_Ids ("+" + g_Default_Section);};

   Companies.Init();    // //Companies//
   Roles.Init();        // //Roles//
   Industries.Init();   // //Industries//
   Personal.Init();     // //Personal//
   Portfolio.Init();    // //Portfolio//
   Programs.Init();     // //Programs//
   Writing.Init();      // //Writing//
   Tools.Init();        // //Tools//
   Favorites.Init();    // //Favorites//
   Help.Init();         // //Help//
   // //new//

   // Reset ListSize to Saved Setting //
   nListSize = ReadSetting ("App.ListSize");
      if (nListSize === null) {nListSize = 10;};
      nListSize = (nListSize)/1;
   SharedSetListSize (nListSize);

   // Reset RecentSize to Saved Setting //recent//
   // nRecentSize = ReadSetting ("App.RecentSize");
   //    if (nRecentSize === null) {nRecentSize = 10;};
   //    nRecentSize = (nRecentSize)/1;
   //SharedSetRecentSize (nRecentSize);

// *** Click_Companies_List **************************************************************************************
// Clicked on Company List Item => "Id=Click_Companies_List_n"
//    For the Company that was clicked, move it to g_Company and copy to "Inject_Companies_List" element
function Click_Companies_List(pxId, pxIndex, pxCompany) {
   console.log ("f:Click_Companies_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxCompany=(" + pxCompany + ")");
   // if (pxCompany == "" | pxCompany === null) {return};
   if (pxIndex == (-5) )
      {g_Company = (pxCompany).toLowerCase(); }// Faked Company Click by entering Custom Text
   else
      {g_Company = document.getElementById(gId).innerText; }// Clicked on Company

   console.log ("f:Click_Companies_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Company=(" + g_Company + ")");

   if (!g_Company) {return};

   document.getElementById("Inject_Companies_Heading").innerHTML = "Links for &quot;" + g_Company + "&quot; (Company)";
   xHTML = "JobLinks for </i>" + g_Company + "</i>";
   document.getElementById("Inject_Companies_Links").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   xSource = g_Company;
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         xURL = hxReplaceTokens(xURL, xSource); // Replace meta-Tokens
         // Build Injected Button //
         xThisLine =
            `
            <button class="hxLinkButton">
               <span title='${Websites.List[i].URL}\n\n${xURL}'>
                  <img src="./Images/Info_Small.bmp" width=18px; height=18px;>
               </span>
               <a href="${xURL}" target="_blank">
                  <b>${Websites.List[i].Name}</b>
               </a>
            </button>
            `;
         g_Generated_Links = g_Generated_Links + xThisLine;
      }
      g_Generated_Links = g_Generated_Links; + "</hxCardBox>";
      document.getElementById("Inject_Companies_Links").innerHTML = g_Generated_Links;

      // Update MRU for Companies //
      xSetting = ReadSetting("Companies.MRU");
      if (xSetting == null)
         {xSetting = g_Company;}
      else
         {xSetting = hxMruAddItem(xSetting,g_Company,27);}
      SaveSetting ("Companies.MRU",xSetting);

      Companies.UpdateMRU();
   }






// *** Click_Roles_List **************************************************************************************
// Clicked on Roles List Item => "Id=Click_Roles_List_n"
//    For the Role that was clicked, move it to g_Role and copy to "Inject_Roles_List" element
function Click_Roles_List(pxId, pxIndex, pxRole) {
   // console.log ("f:Click_Roles_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxRole=(" + pxRole + ")");
   // if (pxRole == "" | pxRole === null) {return};
   if (pxIndex == (-5) )
      {
         g_Role = (pxRole).toLowerCase(); // Faked Role Click by entering Custom Text
      }
   else
      {
         g_Role = document.getElementById(gId).innerText; // Clicked on Role
      }

   if (!g_Role) {return};

   g_Role = hxReplaceAll(g_Role,"* (I.T.) ",""); // Hack Fix

   // Update MRU for Roles //
   xSetting = ReadSetting("Roles.MRU");
   xSetting = hxMruAddItem(xSetting,g_Role);
   SaveSetting ("Roles.MRU",xSetting);

   console.log ("f:Click_Roles_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Role=(" + g_Role + ")");
   document.getElementById("Inject_Roles_Heading").innerHTML = "Links for &quot;" + g_Role + "&quot; (Role)";
   xHTML = "JobLinks for </i>" + g_Role + "</i>";
   document.getElementById("Inject_Roles_Links").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   xSource = g_Role;
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         xURL = hxReplaceTokens(xURL, xSource); // Replace meta-Tokens
         // Build Injected Button //
         xThisLine =
            `
            <button
               class="hxLinkButton"
               >
                  <span title='${Websites.List[i].URL}\n\n${xURL}'>
                     <img src="./Images/Info_Small.bmp" width=18px; height=18px;>
                  </span>
                  <a href="${xURL}" target="_blank">
                     <b>${Websites.List[i].Name}</b>
                  </a>
            </button>
            `;
         g_Generated_Links = g_Generated_Links + xThisLine;
      }
      g_Generated_Links = g_Generated_Links; + "</hxCardBox>";
      document.getElementById("Inject_Roles_Links").innerHTML = g_Generated_Links;
   }
// *** End of Click_Roles_List **************************************************************************************




// *** Click_Industries_List **************************************************************************************
// Clicked on Industry List Item => "Id=Click_Industries_List_n"
//    For the Industry that was clicked, move it to g_Industry and copy to "Inject_Industries_List" element
function Click_Industries_List(pxId, pxIndex, pxIndustry) {
   // console.log ("f:Click_Industries_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxIndustry=(" + pxIndustry + ")");
   // if (pxIndustry == "" | pxIndustry === null) {return};
   if (pxIndex == (-5) )
      {
         g_Industry = (pxIndustry).toLowerCase(); // Faked Industry Click by entering Custom Text
      }
   else
      {
         g_Industry = document.getElementById(gId).innerText; // Clicked on Industry
      }
   console.log ("f:Click_Industries_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Industry=(" + g_Industry + ")");

   if (!g_Industry) {return};

   // Update MRU for Industries //
   xSetting = ReadSetting("Industries.MRU");
   xSetting = hxMruAddItem(xSetting,g_Industry);
   SaveSetting ("Industries.MRU",xSetting);

   document.getElementById("Inject_Industries_Heading").innerHTML = "Links for &quot;" + g_Industry + "&quot; (Industry)";
   xHTML = "JobLinks for </i>" + g_Industry + "</i>";
   document.getElementById("Inject_Industries_Links").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   xSource = g_Industry;
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         xURL = hxReplaceTokens(xURL, xSource); // Replace meta-Tokens
         // Build Injected Button //
         xThisLine =
            `
            <button
               class="hxLinkButton"
               >
                  <span title='${Websites.List[i].URL}\n\n${xURL}'>
                     <img src="./Images/Info_Small.bmp" width=18px; height=18px;>
                  </span>
                  <a href="${xURL}" target="_blank">
                     <b>${Websites.List[i].Name}</b>
                  </a>
            </button>
            `;
         g_Generated_Links = g_Generated_Links + xThisLine;
      }
      g_Generated_Links = g_Generated_Links; + "</hxCardBox>";
      document.getElementById("Inject_Industries_Links").innerHTML = g_Generated_Links;
   }
// *** End of Click_Industries_List **************************************************************************************

// *** Click_Personal_List **************************************************************************************
// Clicked on Personal List Item => "Id=Click_Personal_List_n"
//    For the Personal that was clicked, move it to g_Personal and copy to "Inject_Personal_List" element
function Click_Personal_List(pxId, pxIndex, pxPersonal) {
   // console.log ("f:Click_Personal_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxPersonal=(" + pxPersonal + ")");
   // if (pxPersonal == "" | pxPersonal === null) {return};
   if (pxIndex == (-5) )
      {g_Personal = (pxPersonal).toLowerCase(); } // Faked Personal Click by entering Custom Text
   else
      {g_Personal = document.getElementById(gId).innerText;} // Clicked on Personal

   // Update MRU for Personal //
   xSetting = ReadSetting("Personal.MRU");
   xSetting = hxMruAddItem(xSetting,g_Personal);
   SaveSetting ("Personal.MRU",xSetting);

   console.log ("f:Click_Personal_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Personal=(" + g_Personal + ")");
   document.getElementById("Inject_Personal_Heading").innerHTML = "Links for &quot;" + g_Personal + "&quot; (Personal)";
   xHTML = "JobLinks for </i>" + g_Personal + "</i>";
   document.getElementById("Inject_Personal_Links").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   xSource = g_Personal;
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         xURL = hxReplaceTokens(xURL, xSource); // Replace meta-Tokens
         // Build Injected Button //
         xThisLine =
            `
            <button
               class="hxLinkButton"
               >
                  <span title='${Websites.List[i].URL}\n\n${xURL}'>
                     <img src="./Images/Info_Small.bmp" width=18px; height=18px;>
                  </span>
                  <a href="${xURL}" target="_blank">
                     <b>${Websites.List[i].Name}</b>
                  </a>
            </button>
            `;
         g_Generated_Links = g_Generated_Links + xThisLine;
      }
      g_Generated_Links = g_Generated_Links; + "</hxCardBox>";
      document.getElementById("Inject_Personal_Links").innerHTML = g_Generated_Links;
   }
// *** End of Click_Personal_List **************************************************************************************

// Companies.ResetListSize - Reset Page Size
function SharedSetListSize (nListSize) { console.log ("f: SharedSetListSize: nListSize=(" + nListSize + ")");
   Companies.ResetListSize  (nListSize);  // //Companies//
   Roles.ResetListSize      (nListSize);  // //Roles//
   Industries.ResetListSize (nListSize);  // //Industries//
   Personal.ResetListSize   (nListSize);  // //Personal//
   Help.ResetListSize       (nListSize);  // //Help//
   Tools.ResetListSize      (nListSize);  // //Tools//
   Favorites.ResetListSize  (nListSize);  // //Favorites//
   Portfolio.ResetListSize  (nListSize);  // //Portfolio//
   Programs.ResetListSize   (nListSize);  // //Programs//
   Writing.ResetListSize    (nListSize);  // //Writing//
   // //new//
   SaveSetting ("App.ListSize",nListSize)
   }

// *** //Click_Help_List//Help// **************************************************************************************
// Clicked on Help Topics Item => "Id=Click_Help_List_n"
//    For the Help that was clicked, move it to g_Help and copy to "Help_List_Poke" element
function Click_Help_List(pxId, pxIndex) {
   g_Help = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Help_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Help=(" + g_Help + ")");
   // document.getElementById("Inject_Help_Heading").innerHTML = "<h1>" + g_Help + "</h1><hr>";
   document.getElementById("Inject_Help_Heading").innerHTML = g_Help;

   g_Generated_Text = "";

//fick
   if (g_Help == "* Welcome to JobLinks")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            The purpose of the <keyword>JobLinks</keyword> App is to simplify Job searches by bringing together different website searches
            into one place.<br><br>
            Websites such as <keyword>Monster.com</keyword>, <keyword>CareerBuilder.com</keyword>
            or <keyword>SimplyHired.com</keyword> are presented in different formats depending on what type of
            search is being done. <br><br>
            The websites can be searched in different ways, including by <keyword>Company</keyword>,
            <keyword>Role (Job Title / Category)</keyword>, <keyword>Industry</keyword> or any other value.
         </div>

         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Help_JobLinks_User_Guide.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Help_JobLinks_User_Guide.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   if (g_Help == "** Change Log")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes"><b>Change Log:</b>
            <div class="hxPagingList">09/08/2020
               Began revamping system using 'CardBox' and 'CardPage' metaphors.
               </div>
            <div class="hxPagingList">09/16/2020
               Added 'Options' section and checkbox toggles.
               </div>
            <div class="hxPagingList">09/28/2020
               Company List is working (format, navigation, etc).
               </div>
            <div class="hxPagingList">09/29/2020
               Revamped Progress Bar Function and integrated into Company List.
               </div>
            <div class="hxPagingList">09/30/2020
               Formatted Company List for 'alternating color' List effect.
               </div>
            <div class="hxPagingList">10/01/2020
               Added 'i' icon on Company Links to show before and after parameters.
               </div>
            <div class="hxPagingList">10/05/2020
               Added Roles Tab (List and 2-column Cards), cloned from Companies.
               </div>
            <div class="hxPagingList">10/05/2020
               Added Industries Tab (List and 2-column Cards), cloned from Companies Tab.
               </div>
            <div class="hxPagingList">10/06/2020
               Added Help Tab (List and 2-column Cards), cloned from Companies Tab.
               </div>
            <div class="hxPagingList">10/06/2020
               Added Custom Text option to Companies, Roles and Industries Tabs.
               </div>
            <div class="hxPagingList">10/07/2020
               Added Tools Tab (List and 2-column Cards), cloned from Help Tab.
               </div>
            <div class="hxPagingList">10/08/2020
               Added Portfolio Tab (List and 2-column Cards), cloned from Help Tab.
               </div>
            <div class="hxPagingList">10/10/2020
               Moved Tab Notes to right-side screen (Splash); removed View Notes from Options.
               </div>
            <div class="hxPagingList">10/11/2020
               Added "Splash" Images to Tabs.
               </div>
            <div class="hxPagingList">10/14/2020
               Added Programs Tab (List and 2-column Cards), cloned from Help Tab.
               </div>
            <div class="hxPagingList">10/17/2020
               Added photos to "Splash" screens.
               </div>
            <div class="hxPagingList">10/17/2020
               Added one-time Sorting to Tools, Projects and Help Lists.
               </div>
            <div class="hxPagingList">10/19/2020
               Added "Thomson Case Study" to Portfolio Section.
               </div>
            <div class="hxPagingList">10/19/2020
               Added Design Models and Historical Snapshots to Tools Section.
               </div>
            <div class="hxPagingList">10/21/2020
               Added Recommendations to Portfolio Section.
               </div>
            <div class="hxPagingList">10/22/2020
               Added Writing Projects, Personal Section and Recommendations to Projects Section.
               </div>
            <div class="hxPagingList">10/24/2020
               Added Patents to Writing Section.
               </div>
            <div class="hxPagingList">10/26/2020
               Added Thomson ETL Flow Chart to Portfolio.
               </div>
            <div class="hxPagingList">10/29/2020
               Integrated Favorites from Exported File, Added Sort, Links and Search.
               </div>
            <div class="hxPagingList">11/03/2020
               Added User Guide to Help Section.
               </div>
            <div class="hxPagingList">11/06/2020
               Saved "Last Tab Clicked" to Local Settings; Restore when starting App.
               </div>
            <div class="hxPagingList">11/04/2020
               Changed Company, Roles, Industries and Personal List to ListBoxes.
               </div>
            <div class="hxPagingList">11/09/2020
               Created various PolyFiller Functions: SaveSetting, ReadSetting, ProgressBar, hxMruAddItem and hxReplaceAll.
               </div>

<hidden>//Change//Change Log//</hidden>
         </div>
         `
      return;
      }

   // *** //Project History// **********************************************************************************************
   if (g_Help == "** Project History")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes"><b>Project History:</b>
            <div class="hxPagingList">06/25/2020-07/20/2020 Project v01 "ax" - Demo Model                         </div>
            <div class="hxPagingList">07/20/2020-07/27/2020 Project v02 "bx" - FedEx Model                        </div>
            <div class="hxPagingList">07/27/2020-08/01/2020 Project v03 "cx" - ShipEx Model                       </div>
            <div class="hxPagingList">08/01/2020-08/19/2020 Project v04 "dx" - JobLinks Model, Top-Menu Style     </div>
            <div class="hxPagingList">08/20/2020-09/08/2020 Project v05 "gx" - JobLinks Model, Left-Top-Menu Style</div>
            <div class="hxPagingList">09/08/2020-PRESENT    Project v06 "hx" - JobLinks Model, Side-By-Side Style </div>
         `
      return;
      }

   // *** //To Do// ********************************************************************************************************
   if (g_Help == "** To Do")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes"><b>To Do Items:</b>
            <div class="hxPagingList">Insert Portfolio Video directly into page, not DOWNLOAD technique.                         </div>
            <div class="hxPagingList">Add "Recent Filters" Toggle, list last N Items, SaveSettings.                              </div>
            <div class="hxPagingList">Add Custom List / Import / Export.                                                         </div>
            <div class="hxPagingList">Add Custom "My Skills" List.                                                               </div>
            <div class="hxPagingList">Rebuild Progress Bar mouseover to display green area as "fromN-toN" instead of "0-toN".    </div>
            <div class="hxPagingList">Combine all Lists using "Global_List", prefixing and filtering.                            </div>
            <div class="hxPagingList">10/10/20 DONE - Added splash screen for each Tab with help text; disappear when clicking.  </div>
            <div class="hxPagingList">10/14/20 DONE - Added Projects Sections.                                                   </div>
            <div class="hxPagingList">10/17/20 DONE - Added Sort to Tools, Projects and Help Lists.                              </div>
            <div class="hxPagingList">10/28/20 DONE - Added and integrated Favorites Tab (from exported List).                   </div>
            <div class="hxPagingList">11/06/20 DONE - Save Last Tab clicked to Local Settings.                                   </div>
<hidden>//ToDo//To Do//</hidden>
         </div>
         `
      return;
      }

   if (g_Help == "About JobLinks")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            The <keyword>JobLinks</keyword> App was reverse-engineered from the <keyword>JobList</keyword>
               system I wrote for job searching using MS Excel and VBA. <br><br>
            <keyword>JobLinks</keyword> has been tested extensively in <keyword>MicroSoft Edge</keyword> using
            <keyword>JavaScript es7</keyword>, <keyword>HTML 5</keyword> and <keyword>CSS 3</keyword>.
            It may not function correctly or may be incompatible with other browsers, such as <keyword>Chrome</keyword> or
               <keyword>Internet Explorer</keyword>.<br>
            <ol>
               <li>In the old <keyword>JobList</keyword> system, a Company is chosen from a Company List and multiple websites can be
                  selected from a list. Each website is opened in a browser with the Company Name inserted where appropriate.
                  Many websites can be searched without manually searching each one (opening the website,
                  entering the Company Name, entering the city/state/zip and then clicking the "Search" button).</li>
               <li>In the new <keyword>JobLinks</keyword> App, a Company is chosen from a Company List and individual buttons (links) are
                  created for each website, with the Company Name inserted where appropriate.
                  Although the websites must be opened one at a time, many websites can be searched without manually searching each one.</li>
               <li>In addition, <keyword>JobLinks</keyword> allows the User to search the websites by Roles (Job Titles, Occupation),
                  Industries or any other value.</li>
               <li>A future extension will be for the creation of "Custom Lists" (such as Skills, Programming Languages, etc),
                  which would allow for more flexibility in the type of job search being done.</li>
            </ol>
         </div>
         `
      return;
      }

   if (g_Help == "List Navigation")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            Each "List" has built-in navigation controls. <br><br>

            Some lists are simple "List Boxes", which are scrollable within the
            list using a vertical "swipe" guesture or the mousewheel. <br><br>

            Other Lists are "Paged" Lists, which operate as follows:<br>
            <ol>
               <li>The "<<" button moves to the beginning of the List.</li>
               <li>The "<" button moves to the previous Page in the List. If the pointer is already at the beginning
                  of the List, it will "wrap around" to the last Page in the List.</li>
               <li>The ">" button moves to the next  Page in the List. If the pointer is already at the end
                  of the List, it will "wrap around" to the first Page in the List.</li>
               <li>The ">>" button moves to the end of the List.</li>
               <li>After the control buttons, the text indicates the current Page Number, total number of pages,
                  the items currently shown on the screen and the total number of items in the List.</li>
               <li>The colored indicator "behind" the controls shows where the pointer is within the List. The green area
                  is before the pointer and the red area is after the pointer.</li>
               <li>On smaller devices, the controls may "split" onto multiple lines, but the colored indicator will
                  still indicate the correct position of the pointer.</li>
            </ol>
         </div>
         `
      return;
      }
   if (g_Help == "Link Navigation")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            Each "Link" functions in a similar manner:<br>
            <ol>
               <li>When an item in the List is clicked, the next area ("Generated Links") is filled with links (hyperlinks) for the various
                  websites available.</li>
               <li>Select a Link to open it in another Tab and go there immediately immediately (default action).</li>
               <li>Right-Click a Link and select "<keyword>Open Link in New Tab</keyword>" to open it in another Tab without going there
                  (this action will vary depending on your browser).</li>
               <li>Move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                   symbol to see the "before" and "after" versions of the Website Address 
                   (if you are curious or experiencing problems). At this point, the websites cannot be changed.</li>
            </ol>
         </div>
         `
      return;
      }
   if (g_Help == "Select Companies")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This searches for a job by Company.<br>
            <ol>
               <li>Click an item in the List or enter a value.</li>
               <li>Website Links appear for each website.</li>
               <li>Click a Link to open the website in another Tab and go there immediately (default action).</li>
               <li>Right-Click a Link and select "<keyword>Open Link in New Tab</keyword>" or "<keyword>Open Link in New Window</keyword>" (depending on your browser).</li>
               <li>Move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                   symbol to see the "before" and "after" versions of the Website Address 
                   (if you are curious or experiencing problems). At this point, the websites cannot be changed.</li>
            </ol>
         </div>
         `
      return;
      }
   if (g_Help == "Select Roles")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This searches for a job by Role.<br>
            <ol>
               <li>Click an item in the List or enter a value.</li>
               <li>Website Links appear for each website.</li>
               <li>Click a Link to open the website in another Tab and go there immediately (default action).</li>
               <li>Right-Click a Link and select "<keyword>Open Link in New Tab</keyword>" or "<keyword>Open Link in New Window</keyword>" (depending on your browser).</li>
               <li>Move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                   symbol to see the "before" and "after" versions of the Website Address 
                   (if you are curious or experiencing problems). At this point, the websites cannot be changed.</li>
            </ol>
         </div>
         `
      return;
      }
   if (g_Help == "Select Industries")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This searches for a job by Industry.<br>
            <ol>
               <li>Click an item in the List or enter a value.</li>
               <li>Website Links appear for each website.</li>
               <li>Click a Link to open the website in another Tab and go there immediately (default action).</li>
               <li>Right-Click a Link and select "<keyword>Open Link in New Tab</keyword>" or "<keyword>Open Link in New Window</keyword>" (depending on your browser).</li>
               <li>Move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                   symbol to see the "before" and "after" versions of the Website Address 
                   (if you are curious or experiencing problems). At this point, the websites cannot be changed.</li>
            </ol>
         </div>
         `
      return;
      }
if (g_Help == "Select Personal (in progress)")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This searches for a job by a customized Personal List (in progress).<br>
            <ol>
               <li>Click an item in the List or enter a value.</li>
               <li>Website Links appear for each website.</li>
               <li>Click a Link to open the website in another Tab and go there immediately (default action).</li>
               <li>Right-Click a Link and select "<keyword>Open Link in New Tab</keyword>" or "<keyword>Open Link in New Window</keyword>" (depending on your browser).</li>
               <li>Move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                   symbol to see the "before" and "after" versions of the Website Address 
                   (if you are curious or experiencing problems). At this point, the websites cannot be changed.</li>
            </ol>
         </div>
         `
      return;
      }
      if (g_Help == "Tools")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This option shows various Tools useful to the Developer.
            <ol>
               <li>It shows various CSS elements all in one place, which can be used to verify standardization and integrity of the CSS scripts.</li>
            </ol>
         </div>
         `
      return;
      }
   if (g_Help == "Portfolio")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This option shows various Portfolio items of James Coons.<br><br>
            These include variations of my resume, sample work from different companies,
               case studies and other useful information.
         </div>
         `
      return;
      }
   if (g_Help == "Programs")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This option shows various Programming Projects by James Coons.<br><br>
         </div>
         `
      return;
      }

   if (g_Help == "Writing")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            This option shows various Writing Projects by James Coons.<br><br>
            In most cases, I have only shown the Table of Contents to protect my own works. 
         </div>
         `
      return;
      }

   if (g_Help == "Help")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         <div class="hxNotes">
            <li>It shows the Project History, which details the different main iterations the Project has experienced.</li>
            <li>It shows the Project Change Log, which details some of the processes completed for the development and testing of the Project.</li>
         </div>
         `
      return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@2355 Click_Help_List: FAIL: (" + g_Help + ")");
   document.getElementById("Inject_Help_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Poke_Help_Text").innerHTML = "";
   return;
   }
// *** End of Click_Help_List **************************************************************************************




// *** //Click_Tools_List//Tools// **************************************************************************************
// Clicked on Tools Item => "Id=Click_Tools_List_n"
//    For the Tools that was clicked, move it to g_Tools and copy to "Inject_Tools_List" element
function Click_Tools_List(pxId, pxIndex) {
   g_Tools = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Tools_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Tools=(" + g_Tools + ")");
   // document.getElementById("Inject_Tools_Heading").innerHTML = "<h1>" + g_Tools + "</h1><hr>";
   document.getElementById("Inject_Tools_Heading").innerHTML = g_Tools;

   g_Generated_Text = "";

   // *** //Change//Log//Change Log//
// <hidden>Can remove mouseover from list? </hidden>
   // ***************************************************************************************************
   if (g_Tools == "CSS Normal Cards")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
         <hxCardBox>
            <hxLogoCard title="hxLogoCard">
               (Logo)
            </hxLogoCard>

            <hxClearCardPage>
               <hxClearCardButton>hxClearCardPage / hxClearCardButton</hxClearCardButton>
               <hxCardText>hxCardText</hxCardText>
            </hxClearCardPage>

            <hxCardPage>
               <hxGrayCardButton>hxCardPage / hxGrayCardButton</hxGrayCardButton>
               <hxCardText>hxCardText</hxCardText>
            </hxCardPage>

            <hxCardPage>
               <hxWhiteCardButton>hxCardPage / hxWhiteCardButton</hxWhiteCardButton>
               <hxCardText>hxCardText</hxCardText>
            </hxCardPage>

            <hxCardPage>
               <hxGreenCardButton>hxCardPage / hxGreenCardButton</hxGreenCardButton>
               <hxCardText>hxCardText</hxCardText>
            </hxCardPage>

            <hxCardPage>
               <hxBlueCardButton>hxCardPage / hxBlueCardButton</hxBlueCardButton>
               <hxCardText>hxCardText</hxCardText>
            </hxCardPage>

            <hxCardPage>
               <hxRedCardButton>hxCardPage / hxRedCardButton</hxRedCardButton>
               <hxCardText>hxCardText</hxCardText>
            </hxCardPage>
         </hxCardBox>
         </div>
         `
      return;
      }

   if (g_Tools == "CSS Wide Cards")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <hxCardBox>
            <hxCardWide>
               <hxClearCardButton>hxCardWide / hxClearCardButton</hxClearCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

            <hxCardWide>
               <hxInsetCardButton>hxCardWide / hxInsetCardButton</hxInsetCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

            <hxCardWide>
               <hxGrayCardButton>hxCardWide / hxGrayCardButton</hxGrayCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

            <hxCardWide>
               <hxWhiteCardButton>hxCardWide / hxWhiteCardButton</hxWhiteCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

            <hxCardWide>
               <hxGreenCardButton>hxCardWide / hxGreenCardButton</hxGreenCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

            <hxCardWide>
               <hxBlueCardButton>hxCardWide / hxBlueCardButton</hxBlueCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

            <hxCardWide>
               <hxRedCardButton>hxCardWide / hxRedCardButton</hxRedCardButton>
               <hxCardText>hxCardText ... hxCardText</hxCardText>
            </hxCardWide>

         </hxCardBox>
         `
      return;
      }

   if (g_Tools == "CSS Buttons")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            <hxCardBox>
               Move mouse over elements for more information.<br>
               <button class="hxButtonSmall"       title="hxButtonSmall"       >sm                 </button>
               <button class="hxButtonSmall hx3D"  title="hxButtonSmall hx3D"  >sm                 </button>
               <button class="hxButtonMedium"      title="hxButtonMedium"      >med                </button>
               <button class="hxButtonMedium hx3D" title="hxButtonMedium hx3D" >med                </button>
               <button class="hxButtonLarge"       title="hxButtonLarge"       >hxButtonLarge      </button>
               <button class="hxButtonLarge hx3D"  title="hxButtonLarge hx3D"  >hxButtonLarge hx3D </button>
               <div class="hxLinkButton" title="hxLinkButton">
                  <hxCardText>hxLinkButton</hxCardText>
               </div>
               <div class="hxFilterButton" title="hxFilterButton">
                  <hxCardText>hxFilterButton</hxCardText>
               </div>
               <hxCopyrightText>hxCopyrightText</hxCopyrightText>
               <div class="hxLogo"                 title="hxLogo"              >hxLogo             </div>
               <div class="hxNotes">
                  hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ...
                  hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ...
                  hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ...
                  hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ... hxNotes ...
               </div>
            </hxCardBox>
         </div>
         `
      return;
      }
   if (g_Tools == "CSS Menu System (old)")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            <button class="hxMenuButtonNormal"     title="hxMenuButtonNormal"  >hxMenuButtonNormal    </button>
            <button class="hxMenuButtonDisabled"   title="hxMenuButtonDisabled">hxMenuButtonDisabled  </button>
            <button class="hxMenuButtonSpecial"    title="hxMenuButtonSpecial" >hxMenuButtonSpecial   </button>
         </div>
         `
      return;
      }
   if (g_Tools == "CSS Buttons with Hover Shadows (old)")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            <button class="hxTransparentButton" title="hxTransparentButton" >(Transparent)            </button>
            <button class="hxLeftMenu"          title="hxLeftMenu"          >(LeftMenu)               </button>
            <br><br><br><br>
         </div>
         `
      return;
      }
   if (g_Tools == "CSS Experiments")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            <button class="hxQuotation"    title="hxQuotation"   >hxQuotation    </button>
            <button class="hxWaveText"     title="hxWaveText"    >hxWaveText     </button>
            <button class="hxRainbowText"  title="hxRainbowText" >hxRainbowText  </button>
            <button class="hxCharcoalText" title="hxCharcoalText">hxCharcoalText </button>
            <button class="hxChalkText"    title="hxChalkText"   >hxChalkText    </button>
            <button class="hxSilverButton" title="hxSilverButton">hxSilverButton </button>
         </div>
         `
      return;
      }

   <!-- *** Portfolio Design Models ******************************************************************************* -->
   if (g_Tools == "Design Models")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            This section shows links to screen shots of various websites I used for inspiration. <br><br>
            Click an Image or Link to open a new Tab (default) or right-click and 
            select "Open in new Tab" or "Open in new Window". Close the window to return to <keyword>JobLinks</keyword>.
            <hr>
            <hxCardBox style="font-size: 0.15in; text-shadow:none;">
               <a href="./Files/Models_Dice.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_Dice.jpg#view=FitH"
                  width=110px; height=60px></button><br>Dice         </a>
               <a href="./Files/Models_CapitalOne.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_CapitalOne.jpg#view=FitH"
                  width=110px; height=60px></button><br>Capital One  </a>
               <a href="./Files/Models_DirectList.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_DirectList.jpg#view=FitH"
                  width=110px; height=60px></button><br>Direct List  </a>
               <a href="./Files/Models_Fedex.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_Fedex.jpg#view=FitH"
                  width=110px; height=60px></button><br>Fedex        </a>
               <a href="./Files/Models_GlassDoor.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_GlassDoor.jpg#view=FitH"
                  width=110px; height=60px></button><br>Glass Door   </a>
               <a href="./Files/Models_LinkedIn.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_LinkedIn.jpg#view=FitH"
                  width=110px; height=60px></button><br>LinkedIn     </a>
               <a href="./Files/Models_Radio.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_Radio.jpg#view=FitH"
                  width=110px; height=60px></button><br>Radio        </a>
               <a href="./Files/Models_Virtual.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_Virtual.jpg#view=FitH"
                  width=110px; height=60px></button><br>Virtual      </a>
               <a href="./Files/Models_Yahoo.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_Yahoo.jpg#view=FitH"
                  width=110px; height=60px></button><br>Yahoo        </a>
               <a href="./Files/Models_ZipRecruiter.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Models_ZipRecruiter.jpg#view=FitH"
                  width=110px; height=60px></button><br>ZipRecruiter </a>
            </hxCardBox>
         </div>
         `
         return
      }

   <!-- *** Historical Snapshots ********************************************************************************** -->
   if (g_Tools == "JobList Snapshots")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            This section shows links to screen shots of previous versions of the <keyword>JobLinks</keyword> website, which I retained for future reference. <br><br>
            Click an Image or Link to open a new Tab (default) or right-click and 
            select "Open in new Tab" or "Open in new Window". Close the window to return to <keyword>JobLinks</keyword>.
            <hr>
            <hxCardBox style="font-size: 0.15in; text-shadow:none;">
               <a href="./Files/Versions_JobLinks_071020.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_071020.jpg"
                  width=110px; height=60px></button><br>v07/10/20</a>
               <a href="./Files/Versions_JobLinks_072520.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_072520.jpg"
                  width=110px; height=60px></button><br>v07/25/20</a>
               <a href="./Files/Versions_JobLinks_080120.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_080120.jpg"
                  width=110px; height=60px></button><br>v08/01/20</a>
               <a href="./Files/Versions_JobLinks_080220.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_080220.jpg"
                  width=110px; height=60px></button><br>v08/02/20</a>
               <a href="./Files/Versions_JobLinks_092020.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_092020.jpg"
                  width=110px; height=60px></button><br>v09/20/20</a>
               <a href="./Files/Versions_JobLinks_100620.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_100620.jpg"
                  width=110px; height=60px></button><br>v10/06/20</a>
               <a href="./Files/Versions_JobLinks_110720.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_110720.jpg"
                  width=110px; height=60px></button><br>v11/07/20</a>
               <a href="./Files/Versions_JobLinks_110720b.jpg#view=FitH"
                  target="_blank"><button><img src="./Files/Versions_JobLinks_110720b.jpg"
                  width=110px; height=60px></button><br>v11/07/20b</a>
            </hxCardBox>
         </div>
         `
      return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@2516 Click_Tools_List: FAIL: (" + g_Tools + ")");
   document.getElementById("Inject_Tools_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Inject_Tools_Text").innerHTML = "";
   return;
   }
// *** End of Click_Tools_List **************************************************************************************




// *** //Click_Portfolio_List//Portfolio// **************************************************************************************
// Clicked on Portfolio Item => "Id=Click_Portfolio_List_n"
//    For the Portfolio that was clicked, move it to g_Portfolio and copy to "Inject_Portfolio_List" element
function Click_Portfolio_List(pxId, pxIndex) {
   g_Portfolio = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Portfolio_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Portfolio=(" + g_Portfolio + ")");
   // document.getElementById("Inject_Portfolio_Heading").innerHTML = "<h1>" + g_Portfolio + "</h1><hr>";
   document.getElementById("Inject_Portfolio_Heading").innerHTML = g_Portfolio;

   g_Generated_Text = "";

   <!-- *** About Me ********************************************************************** -->
   if (g_Portfolio == "* About Me")
      // From LinkedIn 10/22/2022
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
         About Me:
            <ul>
               <li><keyword>SUMMARY</keyword>: Experienced Business Analyst specializing in developing business solutions by translating requirements into a complex system that will make a positive difference to the Customer.</li>

               <li>I have worn many hats throughout my professional and technical career, which has given me expertise in numerous areas, including Data Conversion, Business Analysis, Business Intelligence, Software Design, Data Analysis, Programming, Testing, QA, Reverse-Engineering and Process Improvement.</li>

               <li>20+ years as Business Analyst, Data Analysis, Programmming and Technical Writer in various industries.</li>

               <li>Experienced in ETL (Extract-Transform-Load), Data Conversion (Extraction, Import, Manipulation, Export, Migration, Data Mining, Queries), Data Cleansing (standardization, correction, validation).</li>

               <li>Experienced in Agile Methodology (SCRUM, Sprint, JAD sessions), Waterfall Methodology and Blended Methodology. SDLC (System Development Life Cycle). Worked in all phases of the project lifecycle (planning, design, configuration, testing, implementation, documentation, training and closure).</li>

               <li>Create training materials and make presentations in a group setting. Efficiently communicate ideas and concepts to a variety of audiences, both technical and non-technical.</li>

               <li>Possesses strong critical thinking, problem-solving and analysis skills. Ability to identify problems, formulate and recommend solutions, communicate findings to StakeHolders, create functional business requirements and other artifacts.</li>

               <li>20+ years experienced in a variety of Programming Languages, including Visual Basic 6 (VB, VBA), HTML, ASP (Active Server Pages Classic), MS FrontPage.</li>

               <li>Elicit, gather and analyze high-level Business Requirements from technical and non-technical users using a systematic approach. Conducted interviews, meetings and JAD sessions to produce functional and design specifications, project scope and other artifacts for the customer's system.</li>

               <li>Create and prepare business requirement artifacts, including functional design specifications, user stories, use case scenarios, workflow diagrams, screen designs, mockups, wireframes and GUI User Interfaces.</li>
            </ul>

         </div>
         `
      return;
      }

   <!-- *** LinkedIn Recommendations ********************************************************************** -->
   if (g_Portfolio == "* Recommendations")
      // From LinkedIn 10/22/2022
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>While
               working with James at Thomson Reuters, I always appreciated the enormous
               amount of passion and energy he brought to every project. With a broad array
               of technical skills and expertise, James has much to offer any
               organization.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_Phil_Henderson_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_Phil_Henderson.jpg">
                  <hxInsetCardButton>
                     <keyword>Phil</keyword>&nbsp; (manager) worked with James at Master Data Center (MDC), later Thomson IP Management, then Thomson Reuters, now Clarivate.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>

         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>Integrity,
               thorough and inventive are terms I use when speaking of James'
               work and initiative as we completed many projects and Data Conversions. At
               targeted deadlines, James stayed until the project was complete and work
               was done. This type of commitment is hard to come by, but James performed
               his programming with learned Intellectual Property industry knowledge for
               outstanding results delivering data to the top Fortune 50 - 100 clients
               in our business. James would add value to any team both personally and
               professionally.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_Kathleen_Phipps_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_Kathleen_Phipps.jpg">
                  <hxInsetCardButton>
                     <keyword>Kathleen</keyword>&nbsp; (Project Manager) worked with James at Master Data Center (MDC), later Thomson IP Management, then Thomson Reuters, now Clarivate.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>

         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>I
               am pleased to provide this recommendation for James. I had the opportunity
               to work with James on several of our more critical projects and found him to
               be terribly conscientious, hard working and attentive to detail. His easy
               going personality interacted well with clients in pressure situations and
               ultimately earned the respect and trust of those
               involved.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_Domenic_Leo_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_Domenic_Leo.jpg">
                  <hxInsetCardButton>
                     <keyword>Domenic</keyword>&nbsp; (manager) worked with James at Master Data Center (MDC), later Thomson IP Management, then Thomson Reuters, now Clarivate.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>

         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>I
               worked along with James for few years and during that time
               James has consistently demonstrated a strong work ethic and a
               dedication to success. His efforts have produced high quality
               results time and time again. He has developed a Data Conversion
               mapping tool, which has helped the other conversion programmers
               to make the conversion process efficient, faster and
               easier. For these reasons, I highly recommend James
               Coons.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_Rajitha_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_Rajitha.jpg">
                  <hxInsetCardButton>
                     <keyword>Rajitha</keyword>&nbsp; (programmer) worked with James at Master Data Center (MDC), later Thomson IP Management, then Thomson Reuters, now Clarivate.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>

         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>James
               was a Data Conversion programmer while we were at
               Master Data Center together. I was a salesperson that
               brought in new software clients and James helped to implement
               them on our sofware. He was detail-oriented and very pleasant
               to work with. He understood the program well and was able to
               accommodate client needs while converting their data into our
               system. I would recommend him in a programming or analyst role
               with other
               companies.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_Lori_Brown_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_Lori_Brown.jpg">
                  <hxInsetCardButton>
                     <keyword>Lori</keyword>&nbsp; (project manager) worked with James at Master Data Center (MDC), later Thomson IP Management, then Thomson Reuters, now Clarivate.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>

         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>James
               is an extremely nice coworker. He is always driven
               to apply his best skills to get the project completed to
               the StakeHolders requests and focuses on all the details
               of a project. James is an extremely nice coworker. He is
               always driven to apply his best skills to get the project
               completed to the StakeHolders requests and focuses on all
               the details of a project.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_Kim_Victory_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_Kim_Victory.jpg">
                  <hxInsetCardButton>
                     <keyword>Kim</keyword>&nbsp; (project manager) worked with James at Quilogy, later Aspect Software.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>

         <hxCardBox>
            <hxCardPage style="background-color: White; width: 43%">
               <span><img src="./Images/QuoteLeft.bmp" width=22px; height=18px></span>James
               worked with me on a recent project involving Microsoft
               Office SharePoint Server and custom workflow development. James
               was instrumental in the construction of the workflows needed to
               support the change management functionality the project was
               supposed to deliver.
               On this same project, James was also required to create
               deployment documentation and End-User testing scenarios. The
               documentation delivered by James was very detailed and
               accurate.<span><img src="./Images/QuoteRight.bmp" width=22px; height=18px></span>
               <img src="./Files/Recommendation_John_Gootee_Head.jpg">
            </hxCardPage>
            <hxCardPage style="background-color: White; width: 53%">
               <hxCardText>
                  <img src="./Files/Recommendation_John_Gootee.jpg">
                  <hxInsetCardButton>
                     <keyword>John</keyword>&nbsp; (business analyst) worked with James at Quilogy, later Aspect Software.
                  </hxInsetCardButton>
               </hxCardText>
            </hxCardPage>
         </hxCardBox>
         `
      return;
      }

   <!-- *** Chronological Resume PDF ********************************************************************** -->
   if (g_Portfolio == "* Resume - Chronological")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Chronological_Resume.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Chronological_Resume.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Functional Resume PDF ******************************************************************* -->
   if (g_Portfolio == "* Resume - Functional")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Functional_Resume.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Functional_Resume.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Infographic Resume PDF ******************************************************************* -->
   if (g_Portfolio == "* Resume - Infographic")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Infographic_Resume.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Infographic_Resume.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Ryder - ETL Conversion System ******************************************************** -->
   if (g_Portfolio == "Ryder - ETL Conversion System")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Ryder_Sample.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Ryder_Sample.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** CoreLogic - Summary ******************************************************** -->
   if (g_Portfolio == "CoreLogic - Summary")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_CoreLogic_Summary.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_CoreLogic_Summary.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** CoreLogic - Workflow ******************************************************** -->
   if (g_Portfolio == "CoreLogic - Workflow")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_CoreLogic_Workflow.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_CoreLogic_Workflow.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Thomson - Summary ******************************************************** -->
   if (g_Portfolio == "Thomson - Summary")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Summary.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: Summary</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Thomson - ETL Flow Chart.jpg#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: ETL Flow Chart</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword>.<br>

            <hr>
            <iframe src="./Files/Port_Thomson_Summary.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Thomson - ETL Flow Chart ******************************************************** -->
   if (g_Portfolio == "Thomson - ETL Flow Chart")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;Click <a href="./Files/Thomson - ETL Flow Chart.jpg#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: ETL Flow Chart</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Summary.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: Summary</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword>.<br>

            <hr>
            <iframe src="./Files/Thomson - ETL Flow Chart.jpg#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Thomson - ProSpec: A Success Story ******************************************************** -->
   if (g_Portfolio == "Thomson - ProSpec: A Success Story")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Thomson - ETL Flow Chart.jpg#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: ETL Flow Chart</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Summary.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: Summary</keyword>.<br>

            <hr>
            <iframe src="./Files/Port_Thomson_Success_Story.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Thomson - ProSpec: A Case Study ******************************************************** -->
   if (g_Portfolio == "Thomson - ProSpec: A Case Study")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Thomson - ETL Flow Chart.jpg#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: ETL Flow Chart</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword>.<br>

            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Summary.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>Thomson: Summary</keyword>.<br>

            <hr>
            <iframe src="./Files/Port_Thomson_Case_Study.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Quilogy - Summary ******************************************************** -->
   if (g_Portfolio == "Quilogy - Summary")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Quilogy_Summary.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Quilogy_Summary.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** SSB - Summary ******************************************************** -->
   if (g_Portfolio == "SSB - Summary")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_SSB_Summary.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_SSB_Summary.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Quilogy - Leave Request Workflow ******************************************************** -->
   if (g_Portfolio == "Quilogy - Leave Request Workflow")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Quilogy_Leave_Request_Workflow.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Quilogy_Leave_Request_Workflow.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   <!-- *** Quilogy - Eclipsys Workflow ******************************************************** -->
   if (g_Portfolio == "Quilogy - Eclipsys Workflow")
      {document.getElementById("Inject_Portfolio_Text").innerHTML = `
         <div class="hxNotes">
            &#x1405;&nbsp;<a href="./Files/Port_Quilogy_Eclipsys_Workflow.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Port_Quilogy_Eclipsys_Workflow.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         </div>
         `
      return;
      }

   if (g_Portfolio = " ")
      {
         document.getElementById("Inject_Portfolio_Heading").innerHTML = "";
         document.getElementById("Inject_Portfolio_Text").innerHTML = "";
         return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@1953 Click_Portfolio_List: FAIL: (" + g_Portfolio + ")");
   document.getElementById("Inject_Portfolio_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Inject_Portfolio_Text").innerHTML = "";
   return;
   }
// *** End of Click_Portfolio_List **************************************************************************************





// *** //Click_Programs_List//Programs// **************************************************************************************
// Clicked on Programs Item => "Id=Click_Programs_List_n"
//    For the Program that was clicked, move it to g_Program and copy to "Inject_Programs_List" element
function Click_Programs_List(pxId, pxIndex) {
   g_Program = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Programs_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Program=(" + g_Program + ")");
   // document.getElementById("Inject_Programs_Heading").innerHTML = "<h1>" + g_Program + "</h1><hr>";
   document.getElementById("Inject_Programs_Heading").innerHTML = g_Program;
   g_Generated_Text = "";
/*
      {Name: "Macro Maintenance"),
      {Name: "File Maintenance"),
      {Name: "Command-Line Interface"),
      {Name: "Smart Search Function"),
      {Name: "Sodoku Solver"),
//here//
*/

   <!-- *** //JobList// ********************************************************************* -->
   if (g_Program == "JobList")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>JobList</keyword> Contact Management System in Excel/VBA to track Companies and job leads. It was later converted into an Excel spreadsheet. Later, I added my own functional enhancements, including a Command-Line Interface, "Smart Search", custom Reports, data exporting, attaching a Text File, attaching an image, jumping to a particular Company, macros maintenance system, customized Sorting (by date, colors, duplicate records, similar names, etc), Internet Tools (pass Company Name into Google or other websites for searching, etc) and many other commands useful for data maintenance. <br><br>
            Some functionality of <keyword>JobList</keyword> was ported over into the <keyword>JobLinks</keyword> App, which was written in JavaScript es7, HTML 5 and CSS 3.
            <br><br>(2016 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Files/Programs_JobList.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Programs_JobList.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //JobEx// ********************************************************************* -->
   if (g_Program == "JobEx")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>JobEx</keyword> Calendar Reminder system to help with my job search. It contains
            reminders, item forwarding, filters and other features (VBA, Excel, macros).
            <br><br>(04/2010 to 12/2010)
         </div>
         <hr>
<hidden>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Files/Programs_JobEx.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Programs_JobEx.jpg" width="100%">
</hidden>
         </div>
         `
      return;
      }



   <!-- *** //JobLinks// ******************************************************************** -->
   if (g_Program == "JobLinks")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>JobLinks</keyword> Internet App (this App, actually) to help search multiple websites for jobs without manually opening and searching each website. It features dynamic HTML injection, parameter replacement, a single screen tab-style interface, "Cards", "Lists", Progress Bars, page navigation and responsive flex controls (JavaScript, HTML, CSS).<br><br>
            <keyword>JobLink</keyword>'s functionally is based on my <keyword>JobList</keyword> App, written in Excel and VBA.
            <br><br>(June 2020 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Files/Programs_JobLinks.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Programs_JobLinks.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //GraphToData// ***************************************************************** -->
   if (g_Program == "GraphToData")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>GraphToData</keyword> App to convert data from a physical graph into actual data that could be used for further analysis or graphing. The user enters the location of the X and Y axes, then traces over the graph lines with the mouse. The coordinates are converted to actual data scaled as indicated per the X and Y axes and creates a data file. <br><br>
            While it is true that there are any number of applications that do the same thing, some automatically, I took it as a personal challenge to stretch the programming limits to come up with a viable alternative to those other versions (Excel, VBA).
            <br><br>(Apr 2020)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Files/Programs_GraphToData.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Programs_GraphToData.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Proviso// ******************************************************************************* -->
   if (g_Program == "Proviso Job Requirements Comparison")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>Proviso</keyword> App to compare a Company's Job Requirements with a list of Skills to see how they match. After creating several repetitive cover letters for job applications, I thought there should be a better way to do this tedious task. So, I wrote <keyword>Proviso</keyword>. <br><br>
            It includes a Text Comparison and Scoring Function which I wrote specifically for <keyword>Proviso</keyword>. It also includes primitive "Machine Learning" concepts to help the App "learn" every time a comparison is made (Requirements vs Skills). The resulting output is a Cover Letter showing how the Company's Requirements match up to the Skills List (Excel, VBA).
            <br><br>(Jun 2018 – Present)
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Files/Programs_Proviso.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Programs_Proviso.jpg" width="100%">
         </div>
         </div>
         `
      return;
      }

   <!-- *** //List_Compare// *************************************************************************** -->
   if (g_Program == "List_Compare")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>List_Compare</keyword> App to compare two Lists and see how well they matched. As part of this project, I first wrote the <keyword>Text_Compare</keyword> Function with a scoring system to help match the two Lists.<br><br>
            The <keyword>List_Compare</keyword> function is used in the <keyword>Proviso</keyword> App (my Requirements Comparison App) to "Guess" Skills from a Requirement or a Requirement from Skills. It is also used in a stand-alone <keyword>List_Compare</keyword> App within Excel (Excel, VBA).
            <br><br>(Apr 2020 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Files/Programs_List_Compare.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Programs_List_Compare.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //ProSpec// ********************************************************************* -->
   if (g_Program == "ProSpec ETL System")
      {document.getElementById("Inject_Programs_Text").innerHTML = `
         <div class="hxNotes">
            I wrote the <keyword>ProSpec</keyword> system, an ETL Specification Mapping program to solve a programming problem. Our company entered ETL Specifications into a word processor, which were then passed to the Programmers to manually type into a conversion program. I soon realized that this method was slow and inefficient, not to mention a poor utilization of the Programmer's time. As a result, my manager tasked me with creating an automated system in MS Access (<keyword>ProSpec</keyword>) which would allow the ETL Specifications to be entered and maintained in a more efficient and modern manner. After using the system for a short time, I added the capability to export the ETL conversion steps as COBOL code, directly from the Specification. This saved a lot of time and made the process more efficient and accurate. <br><br>
            When we upgraded our database to SQL Server, I also updated <keyword>ProSpec</keyword> to export the conversion steps as SQL scripts. This enhancement imported the data directly into the customer's SQL database tables without writing code or compiling programs (Access, VBA, SQL, T-SQL).<br><br>
            In an early Cost Analysis, a Data Conversion that normally would have taken 2 months was accomplished in 2 weeks using the <keyword>ProSpec</keyword> Application. This represented a savings of $3,000 for this particular conversion. Subsequent  conversions experienced similar savings. <br><br>
            (Mar 1995 – Oct 2004)
            <hr>
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword>.<br>
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword>.
            </div>
         `
      return;
      }

   if (g_Program = " ")
      {
         document.getElementById("Inject_Programs_Heading").innerHTML = "";
         document.getElementById("Inject_Programs_Text").innerHTML = "";
         return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@1953 Click_Programs_List: FAIL: (" + g_Program + ")");
   document.getElementById("Inject_Programs_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Inject_Programs_Text").innerHTML = "";
   return;
   }
// *** End of Click_Programs_List **************************************************************************************





//here

// *** //Click_Writing_List//Writing// **************************************************************************************
// Clicked on Writing Item => "Id=Click_Writing_List_n"
//    For the Writing that was clicked, move it to g_Writing and copy to "Inject_Writing_List" element
function Click_Writing_List(pxId, pxIndex) {
   g_Writing = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Writing_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Writing=(" + g_Writing + ")");
   // document.getElementById("Inject_Writing_Heading").innerHTML = "<h1>" + g_Writing + "</h1><hr>";
   document.getElementById("Inject_Writing_Heading").innerHTML = g_Writing;
   g_Generated_Text = "";

   <!-- *** //Gamification// ********************************************************************* -->
   if (g_Writing == "Gamification (2020)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            The document is a study of Gamification. I became interested after reading a LinkedIn article on the subject.
            <br><br>(2020)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Gamification.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Gamification.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Career Elements// ********************************************************************* -->
   if (g_Writing == "Career Elements (2019)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This research document delves into various elements of career maintenance and is based in part on my college thesis. It details various topics in career maintenance, include resumes, cover letters, research, interviews, job searches, networking, applicant tracking software, social media, online presence and common interview questions. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2015-2019)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Career_Elements.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Career_Elements.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Crowd Sourcing// ********************************************************************* -->
   if (g_Writing == "Crowd Sourcing (2019)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This research document delves into Crowdsourcing through history and how it is used today. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2019)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_CrowdSourcing.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_CrowdSourcing.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Mystery Elements// ********************************************************************* -->
   if (g_Writing == "Mystery Elements (2017)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This Digest is an aggregation of information from various authors and other sources. It delves into various elements of Mystery writing and is based on my own interest in mystery stories. It is a collection of observations, analyses and abstracts of Mysteries, pulled together from a variety of clues and plots from different sources, including movies, TV series, books and Internet sites. It includes topics such as Clues, Plot Summaries and Clue Summaries, pulling from such examples as Columbo, Murder She Wrote, Monk and Sherlock Holmes. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2013-2017)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Mystery_Elements.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Mystery_Elements.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Cultural Stories// ********************************************************************* -->
   if (g_Writing == "Cultural Stories (2016)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This Digest is a collection of stories based on cultural mistakes, misunderstandings and other gaffs. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2016)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Cultural_Stories.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Cultural_Stories.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Guidebook to Life on Earth// ********************************************************************* -->
   if (g_Writing == "Guidebook to Life on Earth (2016)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This Guidebook is a parody concerning a colony on another planet which must deal with the problem of returning to Earth after centuries of being out of contact with them. Some topics include: What is the Earth Like? What are Mars and the Moon Like? What are the dangers of space travel? It was initially intended to be a humorous cultural dissertation similar to Hitchhiker’s Guide to the Galaxy and other stories. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2016)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Life_On_Earth.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Life_On_Earth.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Social Engineering// ********************************************************************* -->
   if (g_Writing == "Social Engineering (2016)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This Digest concerns various aspects of Social Engineering, including examples of Social Engineering (Movies, Books, Media) and Social Engineering Techniques and Terminology (baiting, phishing, tailgating, etc). It is formatted in Compendium-Style (information from various sources).
            <br><br>(2016)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Social_Engineering.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Social_Engineering.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Steganography// ********************************************************************* -->
   if (g_Writing == "Steganography (2014)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This Digest concerns Steganography and Codes from various authors and Internet sources. Topics include: Coding Systems, Types of Codes, Steganography, Substitution Codes, Invisible Codes, Chaff Codes, Transposition/Scramble Codes, Illusory Codes, Encryption and Decryption, Hidden Message Codes, The Five Senses, Language-Based Codes, Computer and Digital Codes, Examples (by the author, James Coons) And Other Codes. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2014)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Steganography.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Steganography.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //The Detective 12 Novels// ********************************************************************* -->
   if (g_Writing == "The Detective 12 Novels (2013)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This two-novel set concerns the life of Drake Vaughn as his technology company is thwarted by Leo, his nemesis. The technology involves virtual reality, gaming, social engineering, drones, crowd sourcing and remote-control terrorism. The first novel is from Drake's point of view. The second novel is Leo's point of view of the  events which occurred in the first novel.
            <br><br>(2013)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Detective_12.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Detective_12.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Story Elements// ********************************************************************* -->
   if (g_Writing == "Story Elements (2012)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This research document began when I became interested in writing techniques. I was intrigued by how authors can captivate your attention with a story. As a result, I began this project, which includes ideas on various writing topics, such as character development, plots, etc. It is formatted in Compendium-Style (information from various sources).
            <br><br>(2012)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot (sample): &#x1405;&nbsp;<a href="./Files/Writing_Story_Elements.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Files/Writing_Story_Elements.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //Patent #6137478 (2000)// ********************************************************************* -->
   if (g_Writing == "* Patent #6137478 (2000)")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This is a patent #6137478 I obtained in 2000.<br><br>
            <keyword>Abstract</keyword>:
            A pin input/output device is provided including a housing with a plurality of bores
            formed therein. Also included is a plurality of pin solenoids each having a unique
            address and a transducer slidable with respect to one of the bores of the housing. A
            plurality of pin position potentiometers are each mounted on an associated one of the
            pin solenoids for generating a position signal which is representative of a current
            position of the corresponding transducer with respect to the housing. An interface
            logic is connected to the pin position potentiometers for generating digital output
            signals each including the address of a designated one of the pin solenoids and the
            current position of the designated one of the pin solenoids as indicated by the position
            signal. It should be noted that the interface logic may further be used to extend the
            transducers per received input signals.
            <br><br>(2000, expired)
         </div>
         <hr>
         </div>
            &#x1405;&nbsp;<a href="./Files/Writing_Patent.pdf#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Writing_Patent.pdf#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         `
      return;
      }

   <!-- *** //Graphics Contest: Abbi's Room// ********************************************************************* -->
   if (g_Writing == "* Graphics Contest: Abbi's Room")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This is a video "fly-by" I made of my Pov-Ray Entry "Abbi's Room".
         </div>
         <hr>
         </div>
            &#x1405;&nbsp;<a href="./Files/Writing_Abbis_Room.wmv#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Writing_Abbis_Room.wmv#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         `
      return;
      }


   <!-- *** //Graphics Contest: Making of Abbi's Room// ********************************************************************* -->
   if (g_Writing == "* Graphics Contest: Making of Abbi's Room")
      {document.getElementById("Inject_Writing_Text").innerHTML = `
         <div class="hxNotes">
            This is a video of some intermediate steps to creating my Pov-Ray Entry "Abbi's Room".
         </div>
         <hr>
         </div>
            &#x1405;&nbsp;<a href="./Files/Writing_Making_Abbis_Room.wmv#view=FitH" target="_blank">View Full-Screen</a>
            <hr>
            <iframe src="./Files/Writing_Making_Abbis_Room.wmv#view=FitH" width='100%'
               style="width:100%; height:5in;"></iframe>
         `
      return;
      }


   if (g_Writing = " ")
      {
         document.getElementById("Inject_Writing_Heading").innerHTML = "";
         document.getElementById("Inject_Writing_Text").innerHTML = "";
         return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@1953 Click_Writing_List: FAIL: (" + g_Writing + ")");
   document.getElementById("Inject_Writing_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Inject_Writing_Text").innerHTML = "";
   return;
   }
// *** End of Click_Writing_List **************************************************************************************





// ************ CURRENTLY DISCONNECTED AND NOT WORKING ************************
// 1. This Function must be "passed to" by an onClick Function (Click_Master in JobLinks).
// 2. Main Click Function must pass Event.
// 3. Use global "gActiveMainMenu" to save Active Button.
// 4. PENDING All Grouped Menu Items have Class="hxMenuButtons
// 5. PENDING Clicking a menu item sets a class to indicate active state.
// 6. PENDING Function sets all buttons as inactive appearance; sets active button as active appearance. HOW?
function Click_Main_Menu(event) {
   // "gId" indicates which Id was pressed.
   // "gWord" shows the parsed words (by " ").
   gId = event.target.id;
      gMenuItem = document.getElementById(gId).innerText;
   gWords = (gId + " ").split(" "); // Use for "array-item" clicking (Companies)
      gBase = gWords[0];
      gIndex = gWords[1];
   console.log ("f:Click_Main_Menu: gId=(" + gId + "), gBase=(" + gBase + "), gIndex=(" + gIndex + "), gMenuItem=(" + gMenuItem + ")");
      SetMainMenu (gId, gMenuItem);
      SaveSetting ("gActiveMainMenu", gMenuItem);
   // decide what to do for each gMenuItem
   // if gMenuItem = "Option 1" ... do something
   }
function SetMainMenu (gId, gMenuItem) {
   console.log ("f:SetMainMenu: gId=(" + gId + "), gMenuItem=(" + gMenuItem + ")");
   // Hide all Sections with "CanHideSection" Class
   // Unhide "Active" Section, process ALL and NONE
return;
// var mnu = document.getElementsByClassName("hxMenuButtons);
// console.log (mnu);
// for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
   // var acc = document.getElementsByClassName("hxMenuButtons);
   var i;
   for (i = 0; i < mnu.length; i++) {
     // acc[i].addEventListener("click", function() {
       this.classList.toggle("active");
/*
       var panel = this.nextElementSibling;
       if (panel.style.display === "block") {
         panel.style.display = "none";
       } else {
         panel.style.display = "block";
       }
*/
     };

   }

/// TESTING
function DownloadFile () {
// console.log ("f: DownloadFile: inside");
   var link = document.createElement("a");
   // link.display = "none";
   xSampleText = "This is a test String";
   link.href = "data:text/plain;charset=UTF-8," + encodeURIComponent(xSampleText);
   link.innerHTML = "Open the Text file";
   link.download = "My File Name.txt";
   // document.body.appendChild(link);
   download(xSampleText, "My File Name.txt", "text/plain" ); // AUTO-DOWNLOAD IF DESIRED, NEEDS "Download.js"
   // download("http://www.google.com", "", "" ); // AUTO-DOWNLOAD IF DESIRED, NEEDS "Download.js"       URL Download Fails
   //(data, strFileName, strMimeType) {
}

// this must be in exported z_Favorites.js File (from Excel)
// SaveSetting ("Favorites_Info",g_Description);

function hxReplaceTokens (pxURL, pxToken) {
   // Usage: rt_URL = hxReplaceTokens(rt_URL, g_Token);
   //
   // History:
   //    11/05/2020 v01 Written by James Coons (Polyfiller, JobLinks).
   rt_URL    = (pxURL);
   rt_Token  = pxToken.trim();
   rt_Plus   = hxReplaceAll (rt_Token, " ", "+");
   rt_Hyphen = hxReplaceAll (rt_Token, " ","-");
   rt_20     = hxReplaceAll (rt_Token, " ","%20");
   rt_URL    = hxReplaceAll (rt_URL, "TOKEN_SPACE" , rt_Token);
   rt_URL    = hxReplaceAll (rt_URL, "TOKEN_PLUS"  , rt_Plus);
   rt_URL    = hxReplaceAll (rt_URL, "TOKEN_HYPHEN", rt_Hyphen);
   rt_URL    = hxReplaceAll (rt_URL, "TOKEN_20"    , rt_20);
   rt_URL    = rt_URL.replace("  "," ");
   return (rt_URL)
   }

function hxReplaceAll(pxString, pxFrom, pxTo)
   // Versatile Polyfiller: Prevents Replacement recursion, case-insensitive.
   // Note: Will not work with case-sensitive at present
   //
   // History:
   //    11/08/2020 v01 Written by James Coons.
   {
   meString = pxString;
   meBullet = "■"; // Can be any character not in the text.
   while (meString.toUpperCase().indexOf(pxFrom.toUpperCase())   !== -1)
      {
         n = meString.toUpperCase().indexOf(pxFrom.toUpperCase());
         xActualValue = meString.substring(n, n + pxFrom.length);
         meString = meString.replace(xActualValue, meBullet);
      }
   while (meString.indexOf(meBullet) !== -1)
      {
         meString = meString.replace(meBullet, pxTo);
      }
   return (meString)
   }

/*
function SharedSetRecentItems(event) {
   // Get value from "RecentItems" Range element
   gId = event.target.id;
   nSize = document.getElementById(gId).value;
      if (nSize < 1) {nSize = 15};
      if (nSize == null) {nSize = 15};
   // Companies.ResetListSize (nSize);
   SaveSetting ("App.RecentSize", nSize);
   }
*/

/*
var b64 = btoa('guru');
fn btoa and atob
*/

function XtoZ(pxString, pxFrom, pxTo)
   // Versatile Encoder: Encodes using a password returning the results in Base64.
// Want to use for a password for "private" Favorites List.
   //
   // History:
   //    11/08/2020 v01 Written by James Coons.
   {
   meString = pxString;
   xOut = btoa(pxString);
   return (xOut)
   }
