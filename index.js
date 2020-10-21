/* References:
   //Company//Click_Companies_Button//Select_Companies//Select_Companies_Ex//
   // Contents //

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

*/

// Global Declarations / Documentations
g_Default_Section = "Favorites_Section";
// g_Default_Section = "States_Section";
// g_Default_Section = "App_Section";
// g_Default_Section = "Quotes_Section";
// g_Default_Section = "Home_Section";
g_Default_Section = "Roles_Section";
g_Default_Section = "Industries_Section";
g_Default_Section = "Help_Section";
g_Default_Section = "";
g_Default_Section = "Companies_Section";
g_Default_Section = "Projects_Section";
g_Default_Section = "Portfolio_Section";
g_Default_Section = "Tools_Section";

g_Selected_Action = "";       // Selected Action Action
g_Selected_Company = "";      // Selected Company from Companies_List
g_Selected_Role = "";         // Select Role from Roles_List
gId = "";                     // Last Element Id Clicked
g_Bullet = "•"
gWord = [];

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

   Show_Ids (me_Sign + "View_Tools");
   Show_Ids (me_Sign + "View_Portfolio");
   Show_Ids (me_Sign + "View_Projects");
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
   Show_Ids (me_Sign + "Tools_Section");
   Show_Ids (me_Sign + "Portfolio_Section");
   Show_Ids (me_Sign + "Projects_Section");
   Show_Ids (me_Sign + "Help_Section");
   //New// New Sections
   return
   }

// //cm//Click//Click_Master//Click_Controller//
function Click_Master(event) {// console.log ("Click_Master: (" + event.target.id + ")");
      // "gId" indicates which element was pressed, if available.
      // "cb_Text" shows the innerText of the object pressed (mainly for Show/Hide tracking)
      // "gWord" shows the parsed words (by " ").
      gId = event.target.id;
      gWords = (gId + " ").split(" "); // Use for "array-item" clicking (Companies)
         gWord1 = gWords[0];
         gWord2 = gWords[1];

      console.log ("0087 Click_Master: gId=(" + gId + "), gWord1=(" + gWord1 + "), gWord2=(" + gWord2 + ")");

      if (gId === "")                           {/* console.error ("Click_Master: No Id."); */ return;}      // No Id
      // if (gId === "ignore")                  {return;}                                 // Ignore Click without Error
      if (gId === "Click_Logo")                 {Click_Logo(gId); return;}                // //Click_Logo//
      if (gId === "View_Options")               {View_Options("View_Options"); return;}   // //View_Options//
      if (gId === "View_Notes")                 {View_Notes(gId); return;}                // //View_Notes//
      if (gId === "View_All")                   {View_All(gId); return;}                  // //View_All//

      // //Companies// Fake Click on Companies List and pass Company to Function (let it take care of the Company)
      if (gId === "Click_Companies_Button")     {Click_Companies_Button(gId); return;}          // //Click_Companies_Button//
      if (gWord1 == "Click_Companies_List")     {Gen_Companies_Card(gId, gWord2, "");return;}  // Click on Companies List Item
      if (gId == "Enter_Custom_Companies")      // Enter Custom Company Text
         {
            gId = "Click_Companies_List";
            gCompanyName = document.getElementById("Enter_Custom_Companies").value;
            Gen_Companies_Card(gId, -5, gCompanyName);
            return
         }

      // //Roles// Fake Click on Roles List and pass Role to Function (let it take care of the Role)
      if (gId === "Click_Roles_Button")         {Click_Roles_Button(gId); return;}              // //Click_Roles_Button//
      if (gWord1 == "Click_Roles_List")         {Gen_Roles_Card(gId, gWord2);return;}          // Click on Role List Item
      if (gId == "Enter_Custom_Roles")          // Enter Custom Role Text
         {
            gId = "Click_Roles_List";
            gRoleName = document.getElementById("Enter_Custom_Roles").value;
            Gen_Roles_Card(gId, -5, gRoleName);
            return
         }

      // //Industries// Fake Click on Industries List and pass Industry to Function (let it take care of the Industry)
      if (gId === "Click_Industries_Button")    {Click_Industries_Button(gId); return;}         // //Click_Industries_Button//
      if (gWord1 == "Click_Industries_List")    {Gen_Industries_Card(gId, gWord2);return;}     // Click on Industry List Item
      if (gId == "Enter_Custom_Industries")     // Enter Custom Industry Text
         {
            gId = "Click_Industries_List";
            gIndustryName = document.getElementById("Enter_Custom_Industries").value;
            Gen_Industries_Card(gId, -5, gIndustryName);
            return
         }

      // //Help//
      if (gId === "Click_Help_Button")          {Click_Help_Button(gId); return;}               // //Click_Help_Button//
      if (gWord1 == "Click_Help_List")          {Gen_Help_Card(gId, gWord2);return;}            // Click on Help Topics Item

      // //Tools//
      if (gId === "Click_Tools_Button")         {Click_Tools_Button(gId); return;}              // //Click_Tools_Button//
      if (gWord1 == "Click_Tools_List")         {Click_Tools_List(gId, gWord2);return;}         // Click on Tools Item

      // //Portfolio//
      if (gId === "Click_Portfolio_Button")     {Click_Portfolio_Button(gId); return;}          // //Click_Portfolio_Button//
      if (gWord1 == "Click_Portfolio_List")     {Click_Portfolio_List(gId, gWord2); return;}    // //Click_Portfolio_List//

      // //Projects//
      if (gId === "Click_Projects_Button")      {Click_Projects_Button(gId); return;}           // //Click_Projects_Button//
      if (gWord1 == "Click_Projects_List")      {Click_Projects_List(gId, gWord2); return;}     // //Click_Projects_List//

      if (gId === "Click_PageSize")             {Click_PageSize(gId); return;}                  // //Click_PageSize//

      //New// New Functions

      console.error ("0087 Click_Master FAIL: gId=(" + gId + "), gWord1=(" + gWord1 + ") gWord2=(" + gWord2 + ")");

      }



//Functions//Code//
function SaveSetting(xSettingName, xSettingValue) {// console.log ("f: SaveSetting('" + xSettingName + "')=> '" + xSettingValue  + "'");
   // Saves localStorage values (key/value pair)
   //    Format: SaveSetting("UserId", "John_Smith");
   //    Keywords: //settings//save settings//savesettings//save_settings//
   // 08/10/2020 v01 Written by James Coons.
   localStorage.setItem(xSettingName, xSettingValue);
   // Alter SaveSetting or LoadSetting to pass "/DELETE" as value to delete item.
   // localStorage.removeItem('key');
   }

function LoadSetting(xSettingName) {
   // Loads localStorage values (key/value pair)
   //    Format: xUserId = LoadSetting("UserId"); // => "John_Smith"
   //    Keywords: //settings//load settings//loadsettings//load_settings//
   // 08/10/2020 v01 Written by James Coons.
   xValue = localStorage.getItem(xSettingName);
   // console.log ("f: LoadSetting(" + xSettingName + " => " + xValue);
   return localStorage.getItem(xSettingName);
   }

// Purpose: Show or Hide multiple Elements by Id.
//    Keywords: //Show//Hide//Set//Set_Id//Show_Ids//Set Element//Set Elements//set_element//Set_Elements/Show Element//Hide Element//
//    Format: Show_Ids ("+elementname,...,-elementname")
//    NOTES: How to know the "previous" value? Because it could be "inline, runin, block, none, etc" BEFORE it was hidden. /fix
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
         xDefault = "none"; // LoadSetting ("D:" + xThisElement);
         objElement = document.getElementById(xThisElement)
         // console.log (objElement);
         switch(true) {
            case objElement === null | objElement === "" :
               console.error  ("...... Show_Ids: Id Error: (" + xThisElement + ")");
               break;
            case xPlusMinus === "+":
               // console.log ("...... SHOWING Id (" + xThisElement + ")");
               objElement.style.display = "block";
               break;
            case xPlusMinus === "-":
               // console.log ("...... HIDING Id (" + xThisElement + ")");
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
// Set Elements (Notes Sections) on/off, if Class="IsNote", depending on checked status of "View_Notes" Element
function View_Notes (gvnId) {
   var gvnChecked = document.getElementById(gvnId).checked; // "View_Notes"
   if (gvnChecked === true) {gvnSign = "+"} else {gvnSign="-"}
   console.log ("219 View_Notes: id=(" + gvnId + ")");
   var x = document.getElementsByClassName("IsNote");
   for (i = 0; i < x.length; i++)
      {
         Show_Ids (gvnSign + x[i].id);
      }
   return
   }

// //Click_Master//View_All ****************************************************************
// Set Element (All_Section) on/off, depending on checked status of "View_Notes" Element
function View_All (gvaCheckId) {
   var gvaChecked = document.getElementById(gvaCheckId).checked; // "View_All"
   if (gvaChecked === true) {gvaSign = "+"} else {gvaSign="-"}
   console.log ("339 View_All: Id=" + gvaCheckId + ", Checked=" + gvaChecked + ", Sign=" + gvaSign);
   Show_Main_Sections (gvaChecked);
   // Show_Ids (gvaSign + "All_Section");
   }

// //Click_Master//Click_PageSize ****************************************************************
function Click_PageSize (ctps_Check_Id) {console.log ("295 Click_PageSize: id=(" + gId + ")");
// Is this actually used now? Looks like maybe not.
   var ctps_Checked = document.getElementById(ctps_Check_Id).checked;
   if (ctps_Checked === true) {ctps_Sign = "+"} else {ctps_Sign="-"}
   // console.log (ctps_Checked); console.log (ctps_Sign)
   Show_Ids (ctps_Sign + "Page_Size_Section");
   }

// //Click_Master//Click_Companies_Button// ***************************************************
function Click_Companies_Button (gId) {console.log ("221 Click_Companies_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Companies";
   Show_Main_Sections (false);
   Show_Ids ("+Companies_Section");
   return;
   }

// //Click_Master//Click_Roles_Button// ***************************************************
function Click_Roles_Button (gId) {console.log ("221 Click_Roles_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Roles";
   Show_Main_Sections (false);
   Show_Ids ("+Roles_Section");
   return;
   }

// //Click_Master//Click_Industries_Button// ***************************************************
function Click_Industries_Button (gId) {console.log ("221 Click_Industries_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Industries";
   Show_Main_Sections (false);
   Show_Ids ("+Industries_Section");
   return;
   }

// //Click_Master//Click_Tools_Button// ***************************************************
function Click_Tools_Button (gId) {console.log ("221 Click_Tools_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Tools";
   Show_Main_Sections (false);
   Show_Ids ("+Tools_Section");
   return;
   }

// //Click_Master//Click_Portfolio_Button// ***************************************************
function Click_Portfolio_Button (gId) {console.log ("221 Click_Portfolio_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Portfolio";
   Show_Main_Sections (false);
   Show_Ids ("+Portfolio_Section");
   return;
   }

// //Click_Master//Click_Projects_Button// ***************************************************
function Click_Projects_Button (gId) {console.log ("221 Click_Projects_Button: id=(" + gId + ")");
   g_Selected_Action = "Select Projects";
   Show_Main_Sections (false);
   Show_Ids ("+Projects_Section");
   return;
   }

// //Click_Master//Click_Help_Button// ***************************************************
function Click_Help_Button (gId) {console.log ("277 Click_Help_Button: id=(" + gId + ")");
   // console.clear();
   g_Selected_Action = "Select Help";
   Show_Main_Sections (false);
   Show_Ids ("+Help_Section");
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
      BegIx: 0,          // Companies.BegIx      : Starting Index for data paging (index range varies)
      EndIx: 0,            // Companies.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Companies.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      PageSize: 20,        // Companies.PageSize : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Companies.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Companies.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      MaxHeight: 0,        // Companies.MaxHeight    : Height Flag to maintain size on last Page
         FilterText: "",   // PENDING //FILTER//
      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)
      // BaseList is the original List. This is so copies can be made for slicing and filtering without affecting the original.
      BaseList: [
         {Name: "3M"},
         {Name: "A-Mark Precious Metals"},
         {Name: "ABM Industries"},
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

      // *** Companies.Init - Initialize Companies System *********************************************
      // ***    Keywords: //Companies.Init//Companies_Init////init//
      Init: () => {console.log ("f: Companies.Init:");
         Companies.List = Companies.BaseList;
         Companies.MaxIx = Companies.List.length - 1;
         Companies.MaxPage = Math.floor(Companies.MaxIx / Companies.PageSize) + 1;
//       Companies.MakeRolodex();
         Companies.UpdateList();
         //g_Selected_Company = ""
         //   document.getElementById("Selected_Companies").innerText = g_Selected_Company;
         },

      // Companies.FirstPage - Go to First Page
      FirstPage: () => { //console.log ("f: Companies.FirstPage => (Items " + (Companies.BegIx + 1) + "-" + (Companies.EndIx+1) + " of " + (Companies.MaxIx + 1) + ")");
         Companies.BegIx = 0; Companies.UpdateList();
         },

      // Companies.PrevPage - Go to Previous Page
      PrevPage: () => { //console.log ("f: Companies.PrevPage => (Items " + (Companies.BegIx+1) + "-" + (Companies.EndIx+1) + " of " + (Companies.MaxIx+1) + ")");
         Companies.BegIx = Companies.BegIx - Companies.PageSize; Companies.UpdateList();
         },

      // Companies.NextPage - Go to Next Page
      NextPage: () => { //console.log ("f: Companies.NextPage => (Items " + (Companies.BegIx + 1) + "-" + (Companies.EndIx+1) + " of " + (Companies.MaxIx + 1) + ")");
         Companies.BegIx = Companies.BegIx + Companies.PageSize; Companies.UpdateList();
         },

      // Companies.LastPage - Go to Last Page
      LastPage: () => { //console.log ("f: Companies.LastPage => (Items " + (Companies.BegIx+1) + "-" + (Companies.EndIx+1) + " of " + (Companies.MaxIx+1) + ")");
         Companies.BegIx = (Companies.MaxPage - 1) * Companies.PageSize; Companies.UpdateList();
         },

      // Companies.ResetPageSize - Reset Page Size
      ResetPageSize: (nPageSize) => { //console.log ("f: Companies.ResetPageSize => (Items " + (Companies.BegIx + 1) + "-" + (Companies.EndIx+1) + " of " + (Companies.MaxIx + 1) + ")");
         Companies.PageSize = nPageSize;        // Companies.PageSize     : (RESET) Items Per Page
         Companies.BegIx = 0,                 // Companies.BegIx      : Starting Index for data paging (index range varies)
         Companies.EndIx = 0,                   // Companies.EndIx        : Ending Index for data paging (index range varies)
         Companies.MaxIx = 0,                   // Companies.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Companies.CurPage = 1,                 // Companies.CurPage      : Current Page Number for data paging (Page Number, varies)
         Companies.MaxPage = 0,                 // Companies.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Companies.MaxHeight = 0,               // Companies.MaxHeight    : Height Flag to maintain size on last Page
         Companies.Init();
         Companies.UpdateList();
         },

//HERE
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
         Companies.BegIx = (me_Page - 1) * Companies.PageSize;
         Companies.UpdateList();
       },

      /* *** Update index and vars for Companies (BegIx, EndIx, MaxIx) ************** */
      /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
      // //Companies.UpdateList// /ROLODEX /PAGING
      //Filtered_List: [];
      //Sliced_List: [];
      UpdateList: () => { // console.log ("f: UpdateList:")
         // var i;
         if (Companies.BegIx > Companies.MaxIx) {// If index too big, wrap
            Companies.BegIx = 0;
            }
         if (Companies.BegIx < 0) {// If index too small, wrap
            Companies.BegIx = (Companies.MaxPage - 1) * Companies.PageSize;
            }
         Companies.EndIx = Companies.BegIx + Companies.PageSize - 1;
            if (Companies.EndIx > Companies.MaxIx) {// If End index too big, truncate
               Companies.EndIx = Companies.MaxIx;
               }
         Companies.CurPage = Math.floor(Companies.BegIx / Companies.PageSize) + 1;
         Companies.Sliced_List = Companies.List.slice(Companies.BegIx, Companies.EndIx + 1);  // Get part of List => Sliced_List
            // Companies.Sliced_List.unshift ({Name: "&#x140A; Click Here for Custom Company Search &#x1405;"});

         pb_PageNo = Math.floor ( (Companies.CurPage / Companies.MaxPage) * 100 + 0.5); // Update Progress Bar
         ProgressBar("Companies_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Companies_List");
         select.innerHTML = Companies.Sliced_List.map;

         xSelect = Companies.Sliced_List.map
            ( (e,ix) =>
               `
               <div
                  class="hxPagingList inline"
                  id="Click_Companies_List ${Companies.BegIx + ix}"
                  >
                  ${e.Name}</div>
               </div>
               `
            ).join('');

         // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
         for (i = Companies.Sliced_List.length + 1; i <= Companies.PageSize; i++)
            {
            xThisModel =
               `
               <div class="hxPagingList inline">&nbsp</div>
               `;
            xSelect = xSelect + xThisModel
            }

/*
         select = document.getElementById("Companies_List_Input");
            xSelect =
               `
               <div
                  class="hxPagingInput inline"
                  id="Companies_List_Input"
                  >
                  input field
               </div>
               `;
         // select.innerHTML = xSelect;
*/

         select.innerHTML = xSelect;
         document.getElementById("id_Companies_Pages").innerHTML = " Page " + Companies.CurPage + " of " + Companies.MaxPage + ", ";
         document.getElementById("id_Companies_Items").innerHTML = " Items " + (Companies.BegIx + 1) +
            "-" + (Companies.EndIx+1) + " of " + (Companies.MaxIx + 1);
         }
      };

// *** Roles Section *** //Roles// //Roles_OBJECT// **********************************************************************
var Roles =
   { // /here
      BegIx: 0,          // Roles.BegIx      : Starting Index for data paging (index range varies)
      EndIx: 0,            // Roles.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Roles.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      PageSize: 20,        // Roles.PageSize     : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Roles.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Roles.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      MaxHeight: 0,        // Roles.MaxHeight    : Height Flag to maintain size on last Page
         FilterText: "",            // PENDING //FILTER//

      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

      // Roles.List    // Original Array containing Name and URL of Internet Roles (from MS Edge export)
// ... Roles.List[index].Checked = true;
      CheckedItems: [
         // /fix
         // would contain only the index of the items that are checked.
         // loop through this array to determine which items were checked by user.
         // CheckedItems.push (true or false)
         // use array.filter to remove all items if <> index (to "uncheck" an item, delete the item from the array)
      ],
      BaseList: [
         {Name: "Backend Developer"},
         {Name: "Business Analyst"},
         {Name: "Computer Service Technician"},
         {Name: "Cyber Security Specialist"},
         {Name: "Data Analyst"},
         {Name: "Data Conversion (ETL)"},
         {Name: "Data Scientist"},
         {Name: "Database Administrator"},
         {Name: "Database Analyst"},
         {Name: "Frontend Developer"},
         {Name: "Full Stack Developer"},
         {Name: "Hardware Engineer"},
         {Name: "I.T. Consultant"},
         {Name: "I.T. Manager"},
         {Name: "Multimedia Developer"},
         {Name: "Network Administrator"},
         {Name: "Network Engineer"},
         {Name: "Programmer"},
         {Name: "Programmer Analyst"},
         {Name: "Project Manager"},
         {Name: "SQL Developer"},
         {Name: "Software Analyst"},
         {Name: "Software Developer"},
         {Name: "Systems Administrator"},
         {Name: "Systems Analyst"},
         {Name: "Systems Engineer"},
         {Name: "Systems Programmer"},
         {Name: "Tech Support"},
         {Name: "Technical Writer"},
         {Name: "Web Designers"},
         {Name: "Web Developer"}
      ],

//here//
      // *** Roles.Init - Initialize Roles System *********************************************
      // ***    Keywords: //Roles.Init//Roles_Init////init//
      Init: () => {console.log ("f: Roles.Init:");
         Roles.List = Roles.BaseList;
         Roles.MaxIx = Roles.List.length - 1;
         Roles.MaxPage = Math.floor(Roles.MaxIx / Roles.PageSize) + 1;
//       Roles.MakeRolodex();
         Roles.UpdateList();
         //g_Selected_Role = ""
         //   document.getElementById("Selected_Roles").innerText = g_Selected_Role;
         },

      // Roles.FirstPage - Go to First Page
      FirstPage: () => { //console.log ("f: Roles.FirstPage => (Items " + (Roles.BegIx + 1) + "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx + 1) + ")");
         Roles.BegIx = 0; Roles.UpdateList();
         },

      // Roles.PrevPage - Go to Previous Page
      PrevPage: () => { //console.log ("f: Roles.PrevPage => (Items " + (Roles.BegIx+1) + "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx+1) + ")");
         Roles.BegIx = Roles.BegIx - Roles.PageSize; Roles.UpdateList();
         },

      // Roles.NextPage - Go to Next Page
      NextPage: () => { //console.log ("f: Roles.NextPage => (Items " + (Roles.BegIx + 1) + "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx + 1) + ")");
         Roles.BegIx = Roles.BegIx + Roles.PageSize; Roles.UpdateList();
         },

      // Roles.LastPage - Go to Last Page
      LastPage: () => { //console.log ("f: Roles.LastPage => (Items " + (Roles.BegIx+1) + "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx+1) + ")");
         Roles.BegIx = (Roles.MaxPage - 1) * Roles.PageSize; Roles.UpdateList();
         },

      // Roles.ResetPageSize - Reset Page Size
      ResetPageSize: (nPageSize) => { //console.log ("f: Roles.ResetPageSize => (Items " + (Roles.BegIx + 1) + "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx + 1) + ")");
         Roles.PageSize = nPageSize;        // Roles.PageSize     : (RESET) Items Per Page
         Roles.BegIx = 0,                 // Roles.BegIx      : Starting Index for data paging (index range varies)
         Roles.EndIx = 0,                   // Roles.EndIx        : Ending Index for data paging (index range varies)
         Roles.MaxIx = 0,                   // Roles.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Roles.CurPage = 1,                 // Roles.CurPage      : Current Page Number for data paging (Page Number, varies)
         Roles.MaxPage = 0,                 // Roles.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Roles.MaxHeight = 0,               // Roles.MaxHeight    : Height Flag to maintain size on last Page
         Roles.Init();
         Roles.UpdateList();
         },

//HERE
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
         Roles.BegIx = (me_Page - 1) * Roles.PageSize;
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
            Roles.BegIx = (Roles.MaxPage - 1) * Roles.PageSize;
            }
         Roles.EndIx = Roles.BegIx + Roles.PageSize - 1;
            if (Roles.EndIx > Roles.MaxIx) {// If End index too big, truncate
               Roles.EndIx = Roles.MaxIx;
               }
         Roles.CurPage = Math.floor(Roles.BegIx / Roles.PageSize) + 1;
         Roles.Sliced_List = Roles.List.slice(Roles.BegIx, Roles.EndIx + 1);  // Get part of List => Sliced_List

         pb_PageNo = Math.floor ( (Roles.CurPage / Roles.MaxPage) * 100 + 0.5); // Update Progress Bar
         ProgressBar("Roles_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Roles_List");
         select.innerHTML = Roles.Sliced_List.map;
         xSelect = Roles.Sliced_List.map
            ( (e,ix) =>
               `
               <div
                  class="hxPagingList inline"
                  id="Click_Roles_List ${Roles.BegIx + ix}"
                  >
                  ${e.Name}</div>
               </div>
               `
            ).join('');

         // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
         for (i = Roles.Sliced_List.length + 1; i <= Roles.PageSize; i++)
            {
            xThisModel =
               `
               <div class="hxPagingList inline">&nbsp</div>
               `;
            xSelect = xSelect + xThisModel
            }
         select.innerHTML = xSelect;
         document.getElementById("id_Roles_Pages").innerHTML = " Page " + Roles.CurPage + " of " + Roles.MaxPage + ", ";
         document.getElementById("id_Roles_Items").innerHTML = " Items " + (Roles.BegIx + 1) +
            "-" + (Roles.EndIx+1) + " of " + (Roles.MaxIx + 1);
         }
      };
// end of roles section

// *** Industries Section *** //Industries// //Industries_OBJECT// **********************************************************************
var Industries =
   { // /here
      BegIx: 0,          // Industries.BegIx      : Starting Index for data paging (index range varies)
      EndIx: 0,            // Industries.EndIx        : Ending Index for data paging (index range varies)
      MaxIx: 0,            // Industries.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      PageSize: 20,        // Industries.PageSize     : Number of Items per displayed page (index increment, fixed)
      CurPage: 1,          // Industries.CurPage      : Current Page Number for data paging (Page Number, varies)
      MaxPage: 0,          // Industries.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      MaxHeight: 0,        // Industries.MaxHeight    : Height Flag to maintain size on last Page
         FilterText: "",            // PENDING //FILTER//

      Sliced_List: [],     // Array holding Sliced Array Items (paging)
      Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

      // Industries.List    // Original Array containing Industry Names (manual)
      BaseList: [
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

//here//
      // *** Industries.Init - Initialize Industries System *********************************************
      // ***    Keywords: //Industries.Init//Industries_Init////init//
      Init: () => {console.log ("f: Industries.Init:");
         Industries.List = Industries.BaseList;
         Industries.MaxIx = Industries.List.length - 1;
         Industries.MaxPage = Math.floor(Industries.MaxIx / Industries.PageSize) + 1;
//       Industries.MakeRolodex();
         Industries.UpdateList();
         //g_Selected_Industry = ""
         //   document.getElementById("Selected_Industries").innerText = g_Selected_Industry;
         },

      // Industries.FirstPage - Go to First Page
      FirstPage: () => { //console.log ("f: Industries.FirstPage => (Items " + (Industries.BegIx + 1) + "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx + 1) + ")");
         Industries.BegIx = 0; Industries.UpdateList();
         },

      // Industries.PrevPage - Go to Previous Page
      PrevPage: () => { //console.log ("f: Industries.PrevPage => (Items " + (Industries.BegIx+1) + "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx+1) + ")");
         Industries.BegIx = Industries.BegIx - Industries.PageSize; Industries.UpdateList();
         },

      // Industries.NextPage - Go to Next Page
      NextPage: () => { //console.log ("f: Industries.NextPage => (Items " + (Industries.BegIx + 1) + "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx + 1) + ")");
         Industries.BegIx = Industries.BegIx + Industries.PageSize; Industries.UpdateList();
         },

      // Industries.LastPage - Go to Last Page
      LastPage: () => { //console.log ("f: Industries.LastPage => (Items " + (Industries.BegIx+1) + "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx+1) + ")");
         Industries.BegIx = (Industries.MaxPage - 1) * Industries.PageSize; Industries.UpdateList();
         },

      // Industries.ResetPageSize - Reset Page Size
      ResetPageSize: (nPageSize) => { //console.log ("f: Industries.ResetPageSize => (Items " + (Industries.BegIx + 1) + "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx + 1) + ")");
         Industries.PageSize = nPageSize;        // Industries.PageSize     : (RESET) Items Per Page
         Industries.BegIx = 0,                 // Industries.BegIx      : Starting Index for data paging (index range varies)
         Industries.EndIx = 0,                   // Industries.EndIx        : Ending Index for data paging (index range varies)
         Industries.MaxIx = 0,                   // Industries.MaxIx        : Last Calculated Index for data paging (index max, fixed)
         Industries.CurPage = 1,                 // Industries.CurPage      : Current Page Number for data paging (Page Number, varies)
         Industries.MaxPage = 0,                 // Industries.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
         Industries.MaxHeight = 0,               // Industries.MaxHeight    : Height Flag to maintain size on last Page
         Industries.Init();
         Industries.UpdateList();
         },

//HERE
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
         Industries.BegIx = (me_Page - 1) * Industries.PageSize;
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
            Industries.BegIx = (Industries.MaxPage - 1) * Industries.PageSize;
            }
         Industries.EndIx = Industries.BegIx + Industries.PageSize - 1;
            if (Industries.EndIx > Industries.MaxIx) {// If End index too big, truncate
               Industries.EndIx = Industries.MaxIx;
               }
         Industries.CurPage = Math.floor(Industries.BegIx / Industries.PageSize) + 1;
         Industries.Sliced_List = Industries.List.slice(Industries.BegIx, Industries.EndIx + 1);  // Get part of List => Sliced_List

         pb_PageNo = Math.floor ( (Industries.CurPage / Industries.MaxPage) * 100 + 0.5); // Update Progress Bar
         ProgressBar("Industries_Progress_Bar", pb_PageNo, "")

         select = document.getElementById("Inject_Industries_List");
         select.innerHTML = Industries.Sliced_List.map;
         xSelect = Industries.Sliced_List.map
            ( (e,ix) =>
               `
               <div
                  class="hxPagingList inline"
                  id="Click_Industries_List ${Industries.BegIx + ix}"
                  >
                  ${e.Name}</div>
               </div>
               `
            ).join('');

         // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
         for (i = Industries.Sliced_List.length + 1; i <= Industries.PageSize; i++)
            {
            xThisModel =
               `
               <div class="hxPagingList inline">&nbsp</div>
               `;
            xSelect = xSelect + xThisModel
            }
         select.innerHTML = xSelect;
         document.getElementById("id_Industries_Pages").innerHTML = " Page " + Industries.CurPage + " of " + Industries.MaxPage + ", ";
         document.getElementById("id_Industries_Items").innerHTML = " Items " + (Industries.BegIx + 1) +
            "-" + (Industries.EndIx+1) + " of " + (Industries.MaxIx + 1);
         }
      };
// end of Industries section

// *** Search List Section *** //Website// //Websites_OBJECT//
var Websites  =
   {
      List: [
         {Name: "All Jobs (LinkedIn)         ", URL: "https://www.linkedin.com/jobs"},

         {Name: "Company Info (Yellow Pages) ", URL: "https://www.whitepages.com/business/KY/Louisville/TOKEN_SPACE"},
         {Name: "Company Info (Indeed)       ", URL: "https://www.indeed.com/cmp/TOKEN_SPACE"},
         {Name: "Company Info (LinkedIn)     ", URL: "https://www.linkedin.com/search/results/all/?keywords=TOKEN_SPACE"},
         {Name: "Company Map (Google, KY)    ", URL: "https://www.google.com/maps/search/&quot;TOKEN_SPACE&quot; in Louisville, KY"},
         {Name: "Company Map (Google, U.S.)  ", URL: "https://www.google.com/maps/search/&quot;TOKEN_SPACE&quot; in United States"},
         {Name: "Company Review (Indeed)     ", URL: "https://www.indeed.com/cmp/TOKEN_SPACE/reviews?fcountry=ALL"},
         {Name: "Company Review (Yelp, KY)   ", URL: "https://www.yelp.com/search?find_desc=TOKEN_PLUS&find_loc=louisville+ky&ns=1"},
         {Name: "Company Review (Yelp, U.S.) ", URL: "https://www.yelp.com/search?find_desc=TOKEN_PLUS&find_loc=United+States&ns=1"},
         {Name: "Company Review (BBB, KY)    ", URL: "https://www.bbb.org/search?find_country=USA&find_loc=louisville%2C%20ky&find_text=TOKEN_20&page=1&sort=Relevance&touched=1"},
         {Name: "People (LinkedIn Resumes)   ", URL: "https://www.linkedin.com/search/results/all/?keywords=Resumes%20at%20TOKEN_20&origin=GLOBAL_Select_HEADER"},

         {Name: "Bing (KY)                   ", URL: "https://www.bing.com/search?q=TOKEN_PLUS+in+Louisville+ky"},
         {Name: "CareerBliss (KY)            ", URL: "https://www.careerbliss.com/search/?q=TOKEN_20&l=Louisville,%20ky&typeFilter=job&sf=true"},
         {Name: "CareerBuilder (KY)          ", URL: "http://www.careerbuilder.com/jobs-TOKEN_HYPHEN-in-Louisville-ky"},
         {Name: "Dice (KY)                   ", URL: "http://www.dice.com/jobs?q=TOKEN_SPACE&l=Louisville+ky"},
         {Name: "FlexJobs (KY)               ", URL: "https://www.flexjobs.com/search?search=&search=TOKEN_PLUS&location=louisville%2C+ky"},

         {Name: "GlassDoor (KY)              ", URL: "https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=TOKEN_PLUS&locT=C&locId=1137724&jobType=&context=Jobs&sc.keyword=TOKEN_PLUS&dropdown=0"},
         {Name: "Google (KY)                 ", URL: "https://www.google.com/search?&q=Jobs+at+TOKEN_PLUS+in+Louisville+KY"},
         {Name: "Google (U.S.)               ", URL: "https://www.google.com/search?&q=Jobs+at+TOKEN_PLUS+in+United+States"},
         {Name: "Indeed (KY)                 ", URL: "https://www.indeed.com/jobs?q=TOKEN_SPACE&l=Louisville+KY"},
         {Name: "Indeed (U.S.)               ", URL: "https://www.indeed.com/jobs?q=TOKEN_SPACE&l=United_States"},
         {Name: "JobsGalore (KY)             ", URL: "https://www.jobsgalore.com/jobs?q=Louisville+TOKEN_PLUS+jobs"},
         {Name: "Lensa (KY)                  ", URL: "https://lensa.com/talent/job-opportunities?job-title=TOKEN_PLUS&location=Louisville+ky"},
         {Name: "LinkedIn (KY)               ", URL: "https://www.linkedin.com/jobs/search/?keywords=TOKEN_SPACE&location=Louisville%20Metropolitan%20Area"},
         {Name: "Monster (KY)                ", URL: "https://www.monster.com/jobs/search/?q=TOKEN_HYPHEN&where=Louisville-KY"},
         {Name: "Monster (U.S.)              ", URL: "https://www.monster.com/jobs/search/?q=TOKEN_HYPHEN&where=United-States"},
         {Name: "MyJobResource (KY)          ", URL: "https://myjobresource.com/indexjobs.php?k=TOKEN_SPACE&l=Louisville%2C+KY"},

         {Name: "SimplyHired (KY)            ", URL: "http://www.simplyhired.com/search?q=TOKEN_PLUS&l=Louisville+ky"},
         {Name: "StartWire (KY)              ", URL: "https://www.startwire.com/job/search?query=TOKEN_SPACE&location_title=Louisville KY"},
         // {Name: "Yahoo (KY)                  ", URL: "https://search.Yahoo.com/search?p=Jobs at &quot;TOKEN_SPACE&quot; in Louisville, KY"}
         ]
      }



// *** Help Section *** //Help//Help_OBJECT// **********************************************************************
var Help =
   {
   BegIx: 0,          // Help.BegIx      : Starting Index for data paging (index range varies)
   EndIx: 0,            // Help.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Help.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   PageSize: 20,        // Help.PageSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Help.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Help.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Help.MaxHeight    : Height Flag to maintain size on last Page
      FilterText: "",            // PENDING //FILTER//

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   //Help//Help.List//    // Original Array containing Help Names (manual)
   BaseList: [
      {Name: "* Welcome to JobLinks"},
      {Name: "About JobLinks"},
      {Name: "List Navigation"},
      {Name: "Link Navigation"},
      {Name: "Select Companies"},
      {Name: "Select Roles"},
      {Name: "Select Industries"},
      {Name: "Tools"},
      {Name: "Portfolio"},
      {Name: "Projects"},
      ],

//here//
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
      Help.MaxPage = Math.floor(Help.MaxIx / Help.PageSize) + 1;
//       Help.MakeRolodex();
      Help.UpdateList();
      //g_Selected_Help = ""
      //   document.getElementById("Selected_Help").innerText = g_Selected_Help;
      },

   // Help.FirstPage - Go to First Page
   FirstPage: () => { //console.log ("f: Help.FirstPage => (Items " + (Help.BegIx + 1) + "-" + (Help.EndIx+1) + " of " + (Help.MaxIx + 1) + ")");
      Help.BegIx = 0; Help.UpdateList();
      },

   // Help.PrevPage - Go to Previous Page
   PrevPage: () => { //console.log ("f: Help.PrevPage => (Items " + (Help.BegIx+1) + "-" + (Help.EndIx+1) + " of " + (Help.MaxIx+1) + ")");
      Help.BegIx = Help.BegIx - Help.PageSize; Help.UpdateList();
      },

   // Help.NextPage - Go to Next Page
   NextPage: () => { //console.log ("f: Help.NextPage => (Items " + (Help.BegIx + 1) + "-" + (Help.EndIx+1) + " of " + (Help.MaxIx + 1) + ")");
      Help.BegIx = Help.BegIx + Help.PageSize; Help.UpdateList();
      },

   // Help.LastPage - Go to Last Page
   LastPage: () => { //console.log ("f: Help.LastPage => (Items " + (Help.BegIx+1) + "-" + (Help.EndIx+1) + " of " + (Help.MaxIx+1) + ")");
      Help.BegIx = (Help.MaxPage - 1) * Help.PageSize; Help.UpdateList();
      },

   // Help.ResetPageSize - Reset Page Size
   ResetPageSize: (nPageSize) => { //console.log ("f: Help.ResetPageSize => (Items " + (Help.BegIx + 1) + "-" + (Help.EndIx+1) + " of " + (Help.MaxIx + 1) + ")");
      Help.PageSize = nPageSize;        // Help.PageSize     : (RESET) Items Per Page
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
         Help.BegIx = (Help.MaxPage - 1) * Help.PageSize;
         }
      Help.EndIx = Help.BegIx + Help.PageSize - 1;
         if (Help.EndIx > Help.MaxIx) {// If End index too big, truncate
            Help.EndIx = Help.MaxIx;
            }
      Help.CurPage = Math.floor(Help.BegIx / Help.PageSize) + 1;
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
      for (i = Help.Sliced_List.length + 1; i <= Help.PageSize; i++)
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
// end of Help section

// *** Tools Section *** //Tools//Tools_OBJECT// **********************************************************************
var Tools =
   {
   BegIx: 0,          // Tools.BegIx      : Starting Index for data paging (index range varies)
   EndIx: 0,            // Tools.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Tools.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   PageSize: 20,        // Tools.PageSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Tools.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Tools.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Tools.MaxHeight    : Height Flag to maintain size on last Page
      FilterText: "",            // PENDING //FILTER//

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   //Tools//Tools.List//    // Original Array containing Tools Names (manual)
   BaseList: [
      {Name: "* Project History"},
      {Name: "* Change Log"},
      {Name: "* To Do"},
      {Name: "CSS Normal Cards"},
      {Name: "CSS Wide Cards"},
      {Name: "CSS Buttons"},
      {Name: "CSS Menu System (old)"},
      {Name: "CSS Buttons with Hover Shadows (old)"},
      {Name: "CSS Experiments"},
      {Name: "Design Models"},
      {Name: "Historical Snapshots"},
      //new//
      ],

//here//
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
      Tools.MaxPage = Math.floor(Tools.MaxIx / Tools.PageSize) + 1;
//       Tools.MakeRolodex();
      Tools.UpdateList();
      //g_Selected_Tools = ""
      //   document.getElementById("Selected_Tools").innerText = g_Selected_Tools;
      },

   // Tools.FirstPage - Go to First Page
   FirstPage: () => { //console.log ("f: Tools.FirstPage => (Items " + (Tools.BegIx + 1) + "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx + 1) + ")");
      Tools.BegIx = 0; Tools.UpdateList();
      },

   // Tools.PrevPage - Go to Previous Page
   PrevPage: () => { //console.log ("f: Tools.PrevPage => (Items " + (Tools.BegIx+1) + "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx+1) + ")");
      Tools.BegIx = Tools.BegIx - Tools.PageSize; Tools.UpdateList();
      },

   // Tools.NextPage - Go to Next Page
   NextPage: () => { //console.log ("f: Tools.NextPage => (Items " + (Tools.BegIx + 1) + "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx + 1) + ")");
      Tools.BegIx = Tools.BegIx + Tools.PageSize; Tools.UpdateList();
      },

   // Tools.LastPage - Go to Last Page
   LastPage: () => { //console.log ("f: Tools.LastPage => (Items " + (Tools.BegIx+1) + "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx+1) + ")");
      Tools.BegIx = (Tools.MaxPage - 1) * Tools.PageSize; Tools.UpdateList();
      },

   // Tools.ResetPageSize - Reset Page Size
   ResetPageSize: (nPageSize) => { //console.log ("f: Tools.ResetPageSize => (Items " + (Tools.BegIx + 1) + "-" + (Tools.EndIx+1) + " of " + (Tools.MaxIx + 1) + ")");
      Tools.PageSize = nPageSize;        // Tools.PageSize     : (RESET) Items Per Page
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
         Tools.BegIx = (Tools.MaxPage - 1) * Tools.PageSize;
         }
      Tools.EndIx = Tools.BegIx + Tools.PageSize - 1;
         if (Tools.EndIx > Tools.MaxIx) {// If End index too big, truncate
            Tools.EndIx = Tools.MaxIx;
            }
      Tools.CurPage = Math.floor(Tools.BegIx / Tools.PageSize) + 1;
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
      for (i = Tools.Sliced_List.length + 1; i <= Tools.PageSize; i++)
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
// end of Tools section


// *** Portfolio Section *** //Portfolio//Portfolio_OBJECT// **********************************************************************
var Portfolio =
   {
   BegIx: 0,          // Portfolio.BegIx      : Starting Index for data paging (index range varies)
   EndIx: 0,            // Portfolio.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Portfolio.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   PageSize: 20,        // Portfolio.PageSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Portfolio.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Portfolio.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Portfolio.MaxHeight    : Height Flag to maintain size on last Page
      FilterText: "",            // PENDING //FILTER//

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   //Portfolio//Portfolio.List//    // Original Array containing Portfolio Names (manual)
   BaseList: [
      {Name: "Resume - Chronological"},
      {Name: "Resume - Functional"},
      {Name: "Resume - Infographic"},
      {Name: "&nbsp;"},
      
      {Name: "CoreLogic - Summary"},
      {Name: "CoreLogic - Workflow"},
      {Name: "&nbsp;"},
      
      {Name: "Quilogy - Summary"},
      {Name: "Quilogy - Eclipsys Workflow"},
      {Name: "Quilogy - Leave Request Workflow"},
      {Name: "&nbsp;"},
      
      {Name: "Ryder - ETL Conversion System"},
      {Name: "&nbsp;"},

      {Name: "SSB - Summary"},
      {Name: "&nbsp;"},

      {Name: "Thomson - Summary"},
      {Name: "Thomson - ProSpec: A Case Study"},
      {Name: "Thomson - ProSpec: A Success Story"},
      //new//
      ],

//here//
   // *** Portfolio.Init - Initialize Portfolio System *********************************************
   // ***    Keywords: //Portfolio.Init//Portfolio_Init////init//
   Init: () => {console.log ("f: Portfolio.Init:");
      Portfolio.List = Portfolio.BaseList;
/*
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
*/
      
      Portfolio.MaxIx = Portfolio.List.length - 1;
      Portfolio.MaxPage = Math.floor(Portfolio.MaxIx / Portfolio.PageSize) + 1;
//       Portfolio.MakeRolodex();
      Portfolio.UpdateList();
      //g_Selected_Portfolio = ""
      //   document.getElementById("Selected_Portfolio").innerText = g_Selected_Portfolio;
      },

   // Portfolio.FirstPage - Go to First Page
   FirstPage: () => { //console.log ("f: Portfolio.FirstPage => (Items " + (Portfolio.BegIx + 1) + "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx + 1) + ")");
      Portfolio.BegIx = 0; Portfolio.UpdateList();
      },

   // Portfolio.PrevPage - Go to Previous Page
   PrevPage: () => { //console.log ("f: Portfolio.PrevPage => (Items " + (Portfolio.BegIx+1) + "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx+1) + ")");
      Portfolio.BegIx = Portfolio.BegIx - Portfolio.PageSize; Portfolio.UpdateList();
      },

   // Portfolio.NextPage - Go to Next Page
   NextPage: () => { //console.log ("f: Portfolio.NextPage => (Items " + (Portfolio.BegIx + 1) + "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx + 1) + ")");
      Portfolio.BegIx = Portfolio.BegIx + Portfolio.PageSize; Portfolio.UpdateList();
      },

   // Portfolio.LastPage - Go to Last Page
   LastPage: () => { //console.log ("f: Portfolio.LastPage => (Items " + (Portfolio.BegIx+1) + "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx+1) + ")");
      Portfolio.BegIx = (Portfolio.MaxPage - 1) * Portfolio.PageSize; Portfolio.UpdateList();
      },

   // Portfolio.ResetPageSize - Reset Page Size
   ResetPageSize: (nPageSize) => { //console.log ("f: Portfolio.ResetPageSize => (Items " + (Portfolio.BegIx + 1) + "-" + (Portfolio.EndIx+1) + " of " + (Portfolio.MaxIx + 1) + ")");
      Portfolio.PageSize = nPageSize;        // Portfolio.PageSize     : (RESET) Items Per Page
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
         Portfolio.BegIx = (Portfolio.MaxPage - 1) * Portfolio.PageSize;
         }
      Portfolio.EndIx = Portfolio.BegIx + Portfolio.PageSize - 1;
         if (Portfolio.EndIx > Portfolio.MaxIx) {// If End index too big, truncate
            Portfolio.EndIx = Portfolio.MaxIx;
            }
      Portfolio.CurPage = Math.floor(Portfolio.BegIx / Portfolio.PageSize) + 1;
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
      for (i = Portfolio.Sliced_List.length + 1; i <= Portfolio.PageSize; i++)
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
// end of Portfolio section


// *** Projects Section *** //Projects//Projects_OBJECT// **********************************************************************
var Projects =
   {
   BegIx: 0,          // Projects.BegIx      : Starting Index for data paging (index range varies)
   EndIx: 0,            // Projects.EndIx        : Ending Index for data paging (index range varies)
   MaxIx: 0,            // Projects.MaxIx        : Last Calculated Index for data paging (index max, fixed)
   PageSize: 20,        // Projects.PageSize     : Number of Items per displayed page (index increment, fixed)
   CurPage: 1,          // Projects.CurPage      : Current Page Number for data paging (Page Number, varies)
   MaxPage: 0,          // Projects.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
   MaxHeight: 0,        // Projects.MaxHeight    : Height Flag to maintain size on last Page
      FilterText: "",            // PENDING //FILTER//

   Sliced_List: [],     // Array holding Sliced Array Items (paging)
   Filtered_List: [],   // Array holding Filtered Array Items (Filter, Future)

   //Projects//Projects.List//    // Original Array containing Projects Names (manual)
   BaseList: [
      {Name: "JobList (Contact Management System)"},
      {Name: "JobLinks (Job Search System)"},
      {Name: "GraphToData (Excel)"},
      {Name: "Proviso (Job Requirements Comparison)"},
      {Name: "List_Compare (Excel)"},
      {Name: "ProSpec (ETL Mapping App)"},
      // {Name: "JobEx (Calendar Tracking)"},
  //new//
/*
      {Name: "Programming, Macro Maintenance"},
      {Name: "Programming, File Maintenance"},
      {Name: "Programming, Command-Line Interface"},
      {Name: "Programming, Smart Search Function"},
      {Name: "Programming, Sodoku Solver"},
  */
      ],

//here//
   // *** Projects.Init - Initialize Projects System *********************************************
   // ***    Keywords: //Projects.Init//Projects_Init////init//
   Init: () => {console.log ("f: Projects.Init:");
      // Projects.List = Projects.BaseList; // Original, without Sort
      Projects.List =
         Projects.BaseList.sort (function(a, b)
            {
               var nameA = a.Name.toUpperCase();
               var nameB = b.Name.toUpperCase();
               if (nameA < nameB) {return -1;}
               if (nameA > nameB) {return 1;}
               return 0;
            }
         );
      // Projects.List = SortArrayByName(Projects.BaseList); // This fails

      Projects.MaxIx = Projects.List.length - 1;
      Projects.MaxPage = Math.floor(Projects.MaxIx / Projects.PageSize) + 1;
//       Projects.MakeRolodex();
      Projects.UpdateList();
      //g_Selected_Projects = ""
      //   document.getElementById("Selected_Projects").innerText = g_Selected_Projects;
      },

   // Projects.FirstPage - Go to First Page
   FirstPage: () => { //console.log ("f: Projects.FirstPage => (Items " + (Projects.BegIx + 1) + "-" + (Projects.EndIx+1) + " of " + (Projects.MaxIx + 1) + ")");
      Projects.BegIx = 0; Projects.UpdateList();
      },

   // Projects.PrevPage - Go to Previous Page
   PrevPage: () => { //console.log ("f: Projects.PrevPage => (Items " + (Projects.BegIx+1) + "-" + (Projects.EndIx+1) + " of " + (Projects.MaxIx+1) + ")");
      Projects.BegIx = Projects.BegIx - Projects.PageSize; Projects.UpdateList();
      },

   // Projects.NextPage - Go to Next Page
   NextPage: () => { //console.log ("f: Projects.NextPage => (Items " + (Projects.BegIx + 1) + "-" + (Projects.EndIx+1) + " of " + (Projects.MaxIx + 1) + ")");
      Projects.BegIx = Projects.BegIx + Projects.PageSize; Projects.UpdateList();
      },

   // Projects.LastPage - Go to Last Page
   LastPage: () => { //console.log ("f: Projects.LastPage => (Items " + (Projects.BegIx+1) + "-" + (Projects.EndIx+1) + " of " + (Projects.MaxIx+1) + ")");
      Projects.BegIx = (Projects.MaxPage - 1) * Projects.PageSize; Projects.UpdateList();
      },

   // Projects.ResetPageSize - Reset Page Size
   ResetPageSize: (nPageSize) => { //console.log ("f: Projects.ResetPageSize => (Items " + (Projects.BegIx + 1) + "-" + (Projects.EndIx+1) + " of " + (Projects.MaxIx + 1) + ")");
      Projects.PageSize = nPageSize;        // Projects.PageSize     : (RESET) Items Per Page
      Projects.BegIx = 0,                 // Projects.BegIx      : Starting Index for data paging (index range varies)
      Projects.EndIx = 0,                   // Projects.EndIx        : Ending Index for data paging (index range varies)
      Projects.MaxIx = 0,                   // Projects.MaxIx        : Last Calculated Index for data paging (index max, fixed)
      Projects.CurPage = 1,                 // Projects.CurPage      : Current Page Number for data paging (Page Number, varies)
      Projects.MaxPage = 0,                 // Projects.MaxPage      : Last Calculated Page Number for data paging (max Page Number, fixed)
      Projects.MaxHeight = 0,               // Projects.MaxHeight    : Height Flag to maintain size on last Page
      Projects.Init();
      Projects.UpdateList();
      },

   /* *** Update index and vars for Projects (BegIx, EndIx, MaxIx) ************** */
   /* *** Update vars for Paging (CurPage, MaxPage) ******************************** */
   // //Projects.UpdateList// /ROLODEX /PAGING
   //Filtered_List: [];
   //Sliced_List: [];
   UpdateList: () => { // console.log ("f: UpdateList:")
      // var i;
      if (Projects.BegIx > Projects.MaxIx) {// If index too big, wrap
         Projects.BegIx = 0;
         }
      if (Projects.BegIx < 0) {// If index too small, wrap
         Projects.BegIx = (Projects.MaxPage - 1) * Projects.PageSize;
         }
      Projects.EndIx = Projects.BegIx + Projects.PageSize - 1;
         if (Projects.EndIx > Projects.MaxIx) {// If End index too big, truncate
            Projects.EndIx = Projects.MaxIx;
            }
      Projects.CurPage = Math.floor(Projects.BegIx / Projects.PageSize) + 1;
      Projects.Sliced_List = Projects.List.slice(Projects.BegIx, Projects.EndIx + 1);  // Get part of List => Sliced_List

      pb_PageNo = Math.floor ( (Projects.CurPage / Projects.MaxPage) * 100 + 0.5); // Update Progress Bar
      ProgressBar("Projects_Progress_Bar", pb_PageNo, "")

      select = document.getElementById("Inject_Projects_List");
      select.innerHTML = Projects.Sliced_List.map;
      xSelect = Projects.Sliced_List.map
         ( (e,ix) =>
            `
            <div
               class="hxPagingList inline"
               id="Click_Projects_List ${Projects.BegIx + ix}"
               >
               ${e.Name}</div>
            </div>
            `
         ).join('');

      // On the Last Page, fill out the Section with blank lines so it doesn't "jump" on the last record
      for (i = Projects.Sliced_List.length + 1; i <= Projects.PageSize; i++)
         {
         xThisModel =
            `
            <div class="hxPagingList inline">&nbsp</div>
            `;
         xSelect = xSelect + xThisModel
         }
      select.innerHTML = xSelect;
      document.getElementById("id_Projects_Pages").innerHTML = " Page " + Projects.CurPage + " of " + Projects.MaxPage + ", ";
      document.getElementById("id_Projects_Items").innerHTML = " Items " + (Projects.BegIx + 1) +
         "-" + (Projects.EndIx+1) + " of " + (Projects.MaxIx + 1);
      }
   };
// end of Projects section


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

function Testing(xStatus) {
/*
   SaveSetting ("Testing", xStatus);
   console.log ("Saved Setting (Testing) as " + xStatus);
   ProgressBar("Companies_Progress_Bar", pb_PageNo, "")
*/
   }

// //Init//App_Init// ******************************************* ******************************************************
   document.getElementById("View_Notes").checked   = false;
   document.getElementById("Inject_Companies_Heading").innerHTML  = "&#x1405; Select a Company or enter Custom Company.";
   document.getElementById("Inject_Roles_Heading").innerHTML      = "&#x1405; Select a Role or enter Custom Role.";
   document.getElementById("Inject_Industries_Heading").innerHTML = "&#x1405; Select an Industry or enter Custom Industry.";
   document.getElementById("Inject_Tools_Heading").innerHTML      = "&#x1405; Select a Tool.";
   document.getElementById("Inject_Portfolio_Heading").innerHTML  = "&#x1405; Select a Portfolio Item.";
   document.getElementById("Inject_Help_Heading").innerHTML       = "&#x1405; Select a Help Topic.";
   document.getElementById("Inject_Projects_Heading").innerHTML   = "&#x1405; Select a Project.";

   Show_Main_Sections (false);         // Hide Main Sections
   if (g_Default_Section != "") {Show_Ids ("+" + g_Default_Section);};

   Companies.Init();    // //Companies//
   Roles.Init();        // //Roles//
   Industries.Init();   // //Industries//
   Help.Init();         // //Help//
   Tools.Init();        // //Tools//
   Portfolio.Init();    // //Portfolio//
   Projects.Init();     // //Projects//
   // //new//

   // Reset PageSize to Saved Setting //
   nPageSize = LoadSetting ("App.PageSize");
      // console.log ("nPageSize=" + nPageSize)
      if (nPageSize === null) {nPageSize = 10;};
      // if (nPageSize === "0null") {nPageSize = 10;};
      nPageSize = (nPageSize)/1; // What if it was null? Should default to 10.
      // console.log ("nPageSize=" + nPageSize)
   Shared_ResetPageSize (nPageSize);

// *** Gen_Companies_Card **************************************************************************************
// Clicked on Company List Item => "Id=Click_Companies_List_n"
//    For the Company that was clicked, move it to g_Company and copy to "Inject_Companies_List" element
function Gen_Companies_Card(pxId, pxIndex, pxCompany) {
   // console.log ("f:Gen_Companies_Card: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxCompany=(" + pxCompany + ")");
   // if (pxCompany == "" | pxCompany === null) {return};
   if (pxIndex == (-5) )
      {
         g_Company = (pxCompany).toUpperCase(); // Faked Company Click by entering Custom Text
      }
   else
      {
         g_Company = document.getElementById(gId).innerText; // Clicked on Company
      }
   console.log ("f:Gen_Companies_Card: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Company=(" + g_Company + ")");
   document.getElementById("Inject_Companies_Heading").innerText = "Links for " + g_Company + " (Company)";
   xHTML = "JobLinks for </i>" + g_Company + "</i>";
   document.getElementById("Inject_Companies_Links").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         // Replace meta-Companies //
         gc_Plus   = g_Company.replace(" ","+");
         gc_Hyphen = g_Company.replace(" ","-");
         gc_20     = g_Company.replace(" ","%20");
         xURL = xURL.replace("TOKEN_SPACE", g_Company);
         xURL = xURL.replace("TOKEN_SPACE", g_Company);
         xURL = xURL.replace("TOKEN_PLUS", gc_Plus);
         xURL = xURL.replace("TOKEN_PLUS", gc_Plus);
         xURL = xURL.replace("TOKEN_HYPHEN", gc_Hyphen);
         xURL = xURL.replace("TOKEN_HYPHEN", gc_Hyphen);
         xURL = xURL.replace("TOKEN_20", gc_20);
         xURL = xURL.replace("TOKEN_20", gc_20);
         xURL = xURL.replace("  "," ");
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
      document.getElementById("Inject_Companies_Links").innerHTML = g_Generated_Links;
   }
// *** End of Gen_Companies_Card **************************************************************************************

// *** Gen_Roles_Card **************************************************************************************
// Clicked on Role List Item => "Id=Click_Roles_List_n"
//    For the Role that was clicked, move it to g_Role and copy to "Inject_Roles_List" element
function Gen_Roles_Card(pxId, pxIndex, pxRole) {
   // console.log ("f:Gen_Roles_Card: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxRole=(" + pxRole + ")");
   // if (pxRole == "" | pxRole === null) {return};
   if (pxIndex == (-5) )
      {
         g_Role = (pxRole).toUpperCase(); // Faked Role Click by entering Custom Text
      }
   else
      {
         g_Role = document.getElementById(gId).innerText; // Clicked on Role
      }
   console.log ("f:Gen_Roles_Card: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Role=(" + g_Role + ")");
   document.getElementById("Inject_Roles_Heading").innerText = "Links for " + g_Role + " (Role)";
   xHTML = "JobLinks for </i>" + g_Role + "</i>";
   document.getElementById("Inject_Roles_Links").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         // Replace meta-Roles //
         gc_Plus   = g_Role.replace(" ","+");
         gc_Hyphen = g_Role.replace(" ","-");
         gc_20     = g_Role.replace(" ","%20");
         xURL = xURL.replace("TOKEN_SPACE", g_Role);
         xURL = xURL.replace("TOKEN_SPACE", g_Role);
         xURL = xURL.replace("TOKEN_PLUS", gc_Plus);
         xURL = xURL.replace("TOKEN_PLUS", gc_Plus);
         xURL = xURL.replace("TOKEN_HYPHEN", gc_Hyphen);
         xURL = xURL.replace("TOKEN_HYPHEN", gc_Hyphen);
         xURL = xURL.replace("TOKEN_20", gc_20);
         xURL = xURL.replace("TOKEN_20", gc_20);
         xURL = xURL.replace("  "," ");
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
// *** End of Gen_Roles_Card **************************************************************************************




// *** Gen_Industries_Card **************************************************************************************
// Clicked on Industry List Item => "Id=Click_Industries_List_n"
//    For the Industry that was clicked, move it to g_Industry and copy to "Inject_Industries_List" element
function Gen_Industries_Card(pxId, pxIndex, pxIndustry) {
   // console.log ("f:Gen_Industries_Card: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") pxIndustry=(" + pxIndustry + ")");
   // if (pxIndustry == "" | pxIndustry === null) {return};
   if (pxIndex == (-5) )
      {
         g_Industry = (pxIndustry).toUpperCase(); // Faked Industry Click by entering Custom Text
      }
   else
      {
         g_Industry = document.getElementById(gId).innerText; // Clicked on Industry
      }
   console.log ("f:Gen_Industries_Card: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Industry=(" + g_Industry + ")");
   document.getElementById("Inject_Industries_Heading").innerText = "Links for " + g_Industry + " (Industry)";
   xHTML = "JobLinks for </i>" + g_Industry + "</i>";
   document.getElementById("Generated_Industries_Links_Poke").innerHTML = "<u>" + xHTML + "</u>"
   g_Generated_Links = "<hxCardBox>";
   for (i = 0; i < Websites.List.length; i++)
      {
         xURL = Websites.List[i].URL;
         xName = Websites.List[i].Name;
         // Replace meta-Industries //
         gc_Plus   = g_Industry.replace(" ","+");
         gc_Hyphen = g_Industry.replace(" ","-");
         gc_20     = g_Industry.replace(" ","%20");
         xURL = xURL.replace("TOKEN_SPACE", g_Industry);
         xURL = xURL.replace("TOKEN_SPACE", g_Industry);
         xURL = xURL.replace("TOKEN_PLUS", gc_Plus);
         xURL = xURL.replace("TOKEN_PLUS", gc_Plus);
         xURL = xURL.replace("TOKEN_HYPHEN", gc_Hyphen);
         xURL = xURL.replace("TOKEN_HYPHEN", gc_Hyphen);
         xURL = xURL.replace("TOKEN_20", gc_20);
         xURL = xURL.replace("TOKEN_20", gc_20);
         xURL = xURL.replace("  "," ");
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
      document.getElementById("Generated_Industries_Links_Poke").innerHTML = g_Generated_Links;
   }
// *** End of Gen_Industries_Card **************************************************************************************


// Companies.ResetPageSize - Reset Page Size
function Shared_ResetPageSize (nPageSize) { console.log ("f: Shared_ResetPageSize: nPageSize=(" + nPageSize + ")");
   Companies.ResetPageSize  (nPageSize);  // //Companies//
   Roles.ResetPageSize      (nPageSize);  // //Roles//
   Industries.ResetPageSize (nPageSize);  // //Industries//
   Help.ResetPageSize       (nPageSize);  // //Help//
   Tools.ResetPageSize      (nPageSize);  // //Tools//
   Portfolio.ResetPageSize  (nPageSize);  // //Portfolio//
   Projects.ResetPageSize   (nPageSize);  // //Projects//
   // //new//
   SaveSetting ("App.PageSize",nPageSize)
   }


// *** //Gen_Help_Card//Help// **************************************************************************************
// Clicked on Help Topics Item => "Id=Click_Help_List_n"
//    For the Help that was clicked, move it to g_Help and copy to "Help_List_Poke" element
function Gen_Help_Card(pxId, pxIndex) {
   g_Help = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Help_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Help=(" + g_Help + ")");
   // document.getElementById("Inject_Help_Heading").innerHTML = "<h1>" + g_Help + "</h1><hr>";
   document.getElementById("Inject_Help_Heading").innerHTML = g_Help;

   g_Generated_Text = "";

   if (g_Help == "* Welcome to JobLinks")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         The purpose of the <keyword>JobLinks</keyword> App is to simplify Job searches by bringing together different website searches
         into one place.<br><br>
         Websites such as <keyword>Monster.com</keyword>, <keyword>CareerBuilder.com</keyword>
         or <keyword>SimplyHired.com</keyword> are presented in different formats depending on what type of
         search is being done. <br><br>
         The websites can be searched in different ways, including by <keyword>Company</keyword>,
         <keyword>Role (Job Title / Category)</keyword>, <keyword>Industry</keyword> or by User-Defined Text.
         `
      return;
      }
   if (g_Help == "About JobLinks")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         The <keyword>JobLinks</keyword> App was reverse-engineered from the <keyword>JobList</keyword>
            system I wrote for job searching using MS Excel and VBA. <br><br>
         <keyword>JobLinks</keyword> has been tested extensively in <keyword>MicroSoft Edge</keyword> using <keyword>CSS</keyword> and
         <keyword>HTML 5</keyword>.
         It may not function correctly or may be incompatible with other browsers, such as <keyword>Chrome</keyword> or
            <keyword>Internet Explorer</keyword>).<br>
         <ol>
            <li>In the old <keyword>JobList</keyword> system, a Company is chosen from a Company List and multiple websites can be
               selected from a list. Each website is opened in a browser with the Company Name inserted where appropriate.
               Many websites can be searched without manually searching each one (opening the website,
               entering the Company Name, entering the city/state/zip and then clicking the "Search" button). </li>
            <li>In the new <keyword>JobLinks</keyword> App, a Company is chosen from a Company List and individual buttons (links) are
               created for each website, with the Company Name inserted where appropriate.
               Although the websites must be opened one at a time, many websites can be searched without manually searching each one. </li>
            <li>In addition, <keyword>JobLinks</keyword> allows the User to search the websites by Roles (Job Titles, Occupation),
               Industries or User-Defined Test (anything else not in the List). </li>
            <li>A future extension will be for the creation of "Custom Lists" (such as Skills, Programming Languages, etc),
               which would allow for more flexibility in the type of job search being done.</li>
         </ol>
         `
      return;
      }

   if (g_Help == "List Navigation")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         Each "List" has built-in navigation controls, which do the following:<br>
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
         `
      return;
      }
   if (g_Help == "Link Navigation")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         Each "Link" functions in a similar manner:<br>
         <ol>
            <li>When an item in the List is clicked, the next area ("Generated Links") is filled with links (hyperlinks) for the various
               websites available. </li>
            <li>Click on a Link to open it in another Tab and go there immediately immediately (default action).</li>
            <li>Right-Click on a Link and select "Open in another Tab" to open it in another Tab without going there
               (this action may vary depending on your browser).</li>
            <li>On the Generated Links section, move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                symbol to see the "before" and "after" versions of the Website Address. </li>
         </ol>
         `
      return;
      }
   if (g_Help == "Select Companies")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         This option permits the User to search for a job by Company.<br>
         <ol>
            <li>The User selects a Company from the Company List or enters User-Defined Text.</li>
            <li>Individual Links appear as buttons for each website.</li>
            <li>Each website can be searched without manually opening and searching it. </li>
            <li>Click on a Link to open it in another Tab and go there immediately (default action).</li>
            <li>Right-Click on a Link and select "Open in another Tab" to open it in another Tab without going there.</li>
            <li>On the Generated Links section, move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                symbol to see the "before" and "after" versions of the Website Address. </li>
         </ol>
         `
      return;
      }
   if (g_Help == "Select Roles")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         This option permits the User to search for a job by Role.<br>
         <ol>
            <li>The User selects a Role from the Role List or enters User-Defined Text.</li>
            <li>Individual Links appear as buttons for each website.</li>
            <li>Each website can be searched without manually opening and searching it. </li>
            <li>Click on a Link to open it in another Tab and go there immediately (default action).</li>
            <li>Right-Click on a Link and select "Open in another Tab" to open it in another Tab without going there.</li>
            <li>On the Generated Links section, move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                symbol to see the "before" and "after" versions of the Website Address. </li>
         </ol>
         `
      return;
      }
   if (g_Help == "Select Industries")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         This option permits the User to search for a job by Industry.<br>
         <ol>
            <li>The User selects an Industry from the Industry List or enters User-Defined Text.</li>
            <li>Individual Links appear as buttons for each website. </li>
            <li>Each website can be searched without manually opening and searching it. </li>
            <li>Click on a Link to open it in another Tab and go there immediately (default action).</li>
            <li>Right-Click on a Link and select "Open in another Tab" to open it in another Tab without going there.</li>
            <li>On the Generated Links section, move the mouse over the <span><img src="./Images/Info_Small.bmp" width=18px; height=18px></span>
                symbol to see the "before" and "after" versions of the Website Address. </li>
         </ol>
         `
      return;
      }
   if (g_Help == "Tools")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         This option shows various Tools useful to the Developer.
         <ol>
            <li>It shows the Project History, which details the different main iterations the Project has experienced. </li>
            <li>It shows the Project Change Log, which details some of the processes completed for the development and testing of the Project. </li>
            <li>It shows various CSS elements all in one place, which can be used to verify standardization and integrity of the CSS scripts. </li>
         </ol>
         `
      return;
      }
   if (g_Help == "Portfolio")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         This option shows various Portfolio items of James Coons.<br><br>
         These include variations of my resume, sample work from different companies,
            case studies and other useful information.
         `
      return;
      }
   if (g_Help == "Projects")
      {document.getElementById("Inject_Help_Text").innerHTML = `
         This option shows various Projects by James Coons.<br><br>
         This includes ...
         `
      return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@2355 Gen_Help_Card: FAIL: (" + g_Help + ")");
   document.getElementById("Inject_Help_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Poke_Help_Text").innerHTML = "";
   return;
   }
// *** End of Gen_Help_Card **************************************************************************************




// *** //Click_Tools_List//Tools// **************************************************************************************
// Clicked on Tools Item => "Id=Click_Tools_List_n"
//    For the Tools that was clicked, move it to g_Tools and copy to "Inject_Tools_List" element
function Click_Tools_List(pxId, pxIndex) {
   g_Tools = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Tools_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Tools=(" + g_Tools + ")");
   // document.getElementById("Inject_Tools_Heading").innerHTML = "<h1>" + g_Tools + "</h1><hr>";
   document.getElementById("Inject_Tools_Heading").innerHTML = g_Tools;


   g_Generated_Text = "";

   // *** //Project History// **********************************************************************************************
   if (g_Tools == "* Project History")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes"><b>Project History:</b>
            <div class="hxPagingList">06/25/2020-07/20/2020 Project v01 "ax" - Demo Model                            </div>
            <div class="hxPagingList">07/20/2020-07/27/2020 Project v02 "bx" - FedEx Model                           </div>
            <div class="hxPagingList">07/27/2020-08/01/2020 Project v03 "cx" - ShipEx Model                          </div>
            <div class="hxPagingList">08/01/2020-08/19/2020 Project v04 "dx" - JobLinks Model, Top-Menu Style        </div>
            <div class="hxPagingList">08/20/2020-09/08/2020 Project v05 "gx" - JobLinks Model, Left-Top-Menu Style   </div>
            <div class="hxPagingList">09/08/2020-PRESENT    Project v06 "hx" - JobLinks Model, Side-By-Side Style    </div>
         `
      return;
      }

   // *** //Change Log// ***************************************************************************************************
   if (g_Tools == "* Change Log")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes"><b>Change Log:</b>
            <div class="hxPagingList">09/08/2020 Began revamping system using 'CardBox' and 'CardPage' metaphors.
               </div>
            <div class="hxPagingList">09/12/2020 Added 'Show Notes' button.
               </div>
            <div class="hxPagingList">09/12/2020 Added 'Settings' section (deprecated).
               </div>
            <div class="hxPagingList">09/16/2020 Added 'Options' section and checkbox toggles.
               </div>
            <div class="hxPagingList">09/28/2020 Company List is working (format, navigation, etc).
               </div>
            <div class="hxPagingList">09/29/2020 Revamped Progress Bar Function and integrated into Company List.
               </div>
            <div class="hxPagingList">09/30/2020 Formatted Company List for 'alternating color' effect.
               </div>
            <div class="hxPagingList">10/01/2020 Added 'i' icon popup on Company Links to show before and after parameters.
               </div>
            <div class="hxPagingList">10/05/2020 Added Roles Tab (List and 2-column Cards), cloned from Companies.
               </div>
            <div class="hxPagingList">10/05/2020 Added Industries Tab (List and 2-column Cards), cloned from Companies Tab.
               </div>
            <div class="hxPagingList">10/06/2020 Removed Skills and Locations Tabs.
               </div>
            <div class="hxPagingList">10/06/2020 Added Help Tab (List and 2-column Cards), cloned from Companies Tab.
               </div>
            <div class="hxPagingList">10/06/2020 Added Custom Text to Companies, Roles and Industries Tabs (instead of using List).
               </div>
            <div class="hxPagingList">10/07/2020 Added Tools Tab (List and 2-column Cards), cloned from Help Tab.
               </div>
            <div class="hxPagingList">10/08/2020 Added Portfolio Tab (List and 2-column Cards), cloned from Help Tab.
               </div>
            <div class="hxPagingList">10/10/2020 Moved Tab Notes to right-side screen (Splash); removed View Notes from Options.
               </div>
            <div class="hxPagingList">10/11/2020 Added "Splash" Images to Tabs.
               </div>
            <div class="hxPagingList">10/14/2020 Added "Projects" Section.
               </div>
            <div class="hxPagingList">10/17/2020 Added photos to each "Splash" Section.
               </div>
            <div class="hxPagingList">10/17/2020 Added Sorting to Tools, Projects and Help Lists.
               </div>
            <div class="hxPagingList">10/19/2020 Added "Thomson Case Study" to Portfolio Section.
               </div>
            <div class="hxPagingList">10/19/2020 Added Design Models and Historical Snapshots to Tools Section.
               </div>
         </div>
         `
      return;
      }

   // *** //To Do// ********************************************************************************************************
   if (g_Tools == "* To Do")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes"><b>To Do Items:</b>
            <div class="hxPagingList">Add Custom List / Import / Export.</div>
            <div class="hxPagingList">Add Custom "My Skills" List.</div>
            <div class="hxPagingList">Modify logic to hide NEXT/PREV if only one screen in List.</div>
            <div class="hxPagingList">Rebuild Progress Bar mouseover to display green area as "fromN-toN" instead of "0-toN".</div>
            <div class="hxPagingList">10/03/20 DONE - Added Help Text System.</div>
            <div class="hxPagingList">10/06/20 DONE - Add Help topics as a List, show text when clicking. Progress Bar hidden.</div>
            <div class="hxPagingList">10/06/20 DONE - Fix Company Tab: Not dismissing when other Tabs active.</div>
            <div class="hxPagingList">10/07/20 DONE - Add Tool topics as a List, show item when clicking.</div>
            <div class="hxPagingList">10/08/20 DONE - Add Portfolio items as a List, show item when clicking.</div>
            <div class="hxPagingList">10/08/20 DONE - Change main Cards to buttons/menu.</div>
            <div class="hxPagingList">10/10/20 DONE - Added splash screen for each Tab with help text; disappear when clicking item.</div>
            <div class="hxPagingList">10/14/20 DONE - Added Projects Sections.</div>
            <div class="hxPagingList">10/17/20 DONE - Added photo to each splash screen.</div>
            <div class="hxPagingList">10/17/20 DONE - Added Sort to Tools, Projects and Help Lists.</div>
         </div>
         `
      return;
      }

   if (g_Tools == "CSS Normal Cards")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
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

         <hxCardBox>
            <div class="hxLinkButton" title="hxLinkButton">
               <hxCardText>hxLinkButton</hxCardText>
            </div>

            <hxCopyrightText>hxCopyrightText</hxCopyrightText>

         </hxCardBox>
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
               <hxGrayCardButton>hxCardWide / hxGrayCardButton</hxGrayCardButton>
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
         Move mouse over elements for more information.<br>
         <button class="hxButtonSmall"       title="hxButtonSmall"       >sm</button>
         <button class="hxButtonSmall hx3D"  title="hxButtonSmall hx3D"  >sm</button>
         <button class="hxButtonMedium"      title="hxButtonMedium"      >med</button>
         <button class="hxButtonMedium hx3D" title="hxButtonMedium hx3D" >med</button>
         <button class="hxButtonLarge"       title="hxButtonLarge"       >hxButtonLarge</button>
         <button class="hxButtonLarge hx3D"  title="hxButtonLarge hx3D"  >hxButtonLarge hx3D</button>
         <div class="hxLogo"                 title="hxLogo"              >hxLogo</div>
         `
      return;
      }
   if (g_Tools == "CSS Menu System (old)")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <button class="hxMenuButtonNormal"     title="hxMenuButtonNormal"  >hxMenuButtonNormal</button>
         <button class="hxMenuButtonDisabled"   title="hxMenuButtonDisabled">hxMenuButtonDisabled</button>
         <button class="hxMenuButtonSpecial"    title="hxMenuButtonSpecial" >hxMenuButtonSpecial</button>
         `
      return;
      }
   if (g_Tools == "CSS Buttons with Hover Shadows (old)")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <button class="hxTransparentButton" title="hxTransparentButton" >(Transparent)</button>
         <button class="hxLeftMenu"          title="hxLeftMenu"          >(LeftMenu)</button>
         `
      return;
      }
   if (g_Tools == "CSS Experiments")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <button class="hxQuotation"            title="hxQuotation"         >hxQuotation</button>
         <button class="hxWaveText"             title="hxWaveText"          >hxWaveText</button>
         <button class="hxRainbowText"          title="hxRainbowText"       >hxRainbowText</button>
         <button class="hxCharcoalText"         title="hxCharcoalText"      >hxCharcoalText</button>
         <button class="hxChalkText"            title="hxChalkText"         >hxChalkText</button>
         `
      return;
      }

   <!-- *** Portfolio Design Models ******************************************************************************* -->
   if (g_Tools == "Design Models")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            This section shows links to screen shots of various websites which I used for inspiration. Clicking the Link will open a new window. When finished, close the window to return to <keyword>JobLinks</keyword>.
            <hr>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_DirectList.jpg#view=FitH"        target="_blank">DirectList</a><br>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_Fedex.jpg#view=FitH"             target="_blank">FedEx</a><br>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_GlassDoor.jpg#view=FitH"         target="_blank">GlassDoor</a><br>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_Radio.jpg#view=FitH"             target="_blank">Radio</a><br>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_Virtual_Vocations.jpg#view=FitH" target="_blank">Virtual Vocations</a><br>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_Yahoo.jpg#view=FitH"             target="_blank">Yahoo</a><br>
            &#x1405;&nbsp;View Model of <a href="./Files/Models_ZipRecruiter.jpg#view=FitH"      target="_blank">ZipRecruiter</a><br> </div>
         `
         return
      }

   <!-- *** Historical Snapshots ********************************************************************************** -->
   if (g_Tools == "Historical Snapshots")
      {document.getElementById("Inject_Tools_Text").innerHTML = `
         <div class="hxNotes">
            This section shows links to screen shots of previous versions of the <keyword>JobLinks</keyword> website, which I retained for future reference. Clicking the Link will open a new window. When finished, close the window to return to <keyword>JobLinks</keyword>.
            <hr>
            &#x1405;&nbsp;View <a href="./Files/Versions_JobLinks_071020.jpg#view=FitH" target="_blank">JobLinks v07/10/20</a><br>
            &#x1405;&nbsp;View <a href="./Files/Versions_JobLinks_072520.jpg#view=FitH" target="_blank">JobLinks v07/25/20</a><br>
            &#x1405;&nbsp;View <a href="./Files/Versions_JobLinks_080120.jpg#view=FitH" target="_blank">JobLinks v08/01/20</a><br>
            &#x1405;&nbsp;View <a href="./Files/Versions_JobLinks_080220.jpg#view=FitH" target="_blank">JobLinks v08/02/20</a><br>
            &#x1405;&nbsp;View <a href="./Files/Versions_JobLinks_092020.jpg#view=FitH" target="_blank">JobLinks v09/20/20</a><br>
            &#x1405;&nbsp;View <a href="./Files/Versions_JobLinks_100620.jpg#view=FitH" target="_blank">JobLinks v10/06/20</a><br>
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

   <!-- *** Chronological Resume PDF ********************************************************************** -->
   if (g_Portfolio == "Resume - Chronological")
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
   if (g_Portfolio == "Resume - Functional")
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
   if (g_Portfolio == "Resume - Infographic")
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
            
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword>.<br>
            
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword>.<br>
            
            <hr>
            <iframe src="./Files/Port_Thomson_Summary.pdf#view=FitH" width='100%'
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





// *** //Click_Projects_List//Project// **************************************************************************************
// Clicked on Project Item => "Id=Click_Projects_List_n"
//    For the Project that was clicked, move it to g_Project and copy to "Inject_Project_List" element
function Click_Projects_List(pxId, pxIndex) {
   g_Project = document.getElementById(gId).innerText + "";
   console.log ("f:Click_Projects_List: pxId=(" + pxId + "), pxIndex=(" + pxIndex +") g_Project=(" + g_Project + ")");
   // document.getElementById("Inject_Projects_Heading").innerHTML = "<h1>" + g_Project + "</h1><hr>";
   document.getElementById("Inject_Projects_Heading").innerHTML = g_Project;


   g_Generated_Text = "";

/*
done      {Name: "JobList (Contact Management System)"),
done      {Name: "JobLinks (Job Search System)"),
done      {Name: "GraphToData (Excel)"),
done      {Name: "Proviso (Job Requirements Comparison)"),
done      {Name: "List_Compare (Excel)"),

      {Name: "Programming, Macro Maintenance"),
      {Name: "Programming, File Maintenance"),
      {Name: "Programming, Command-Line Interface"),
      {Name: "Programming, Smart Search Function"),
      {Name: "Programming, Sodoku Solver"),
      {Name: "ProSpec (ETL Mapping App)"),
//here//
*/

   <!-- *** Programming: JobList ******************************************************************** -->
   if (g_Project == "JobList (Contact Management System)")
      {document.getElementById("Inject_Projects_Text").innerHTML = `
         <div class="hxNotes">
            <keyword>JobList</keyword> is a Contact Management System written in Excel/VBA. It started out as a simple text file to track Companies (job leads), which was later converted into an Excel database. Later, I added my own enhancements, including a Command-Line Interface, "Smart Search", custom Reports, data exporting, attaching a Text File, attaching an image, jumping to a particular Company, macros maintenance system, customized Sorting (by date, colors, duplicate records, similar names, etc), Internet Tools (pass Company Name into Google or other websites for searching, etc) and many other commands useful for data maintenance. <br><br>
            Some functionality of <keyword>JobList</keyword> was ported over to <keyword>JobLinks</keyword>, which was written in JavaScript, HTML and CSS.
            <br><br>(2016 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Images/Projects_JobList.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Images/Projects_JobList.jpg" width="100%">
         </div>
         `
      return;
      }

   if (g_Project == "JobLinks (Job Search System)")
      {document.getElementById("Inject_Projects_Text").innerHTML = `
         <div class="hxNotes">
            <keyword>JobLinks</keyword> is an Internet App (this App, actually) which helps search multiple websites for jobs without manually opening and searching each website. It features dynamic HTML injection, parameter replacement, a single screen tab-style interface, "Cards", "Lists", Progress Bars, page navigation and responsive flex controls (JavaScript, HTML, CSS).<br><br>
            <keyword>JobLink</keyword>'s functionally is based on my <keyword>JobList</keyword> App, written in Excel/VBA.
            <br><br>(June 2020 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Images/Projects_JobLinks.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Images/Projects_JobLinks.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** Programming: GraphToData (Excel, VBA) ****************************************************** -->
   if (g_Project == "GraphToData (Excel)")
      {document.getElementById("Inject_Projects_Text").innerHTML = `
         <div class="hxNotes">
            The <keyword>GraphToData</keyword> App was written to convert data from a physical graph into actual data that could be used for further analysis or graphing. The user enters the location of the X and Y axes, then traces over the graph lines with the mouse. The coordinates are converted to actual data scaled as indicated per the X and Y axes and creates a data file. <br><br>
            While it is true that there are any number of applications that do the same thing, some automatically, I took it as a personal challenge to stretch the programming limits to come up with a viable alternative to those other versions (Excel, VBA).
            <br><br>(Apr 2020 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Images/Projects_GraphToData.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Images/Projects_GraphToData.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** Proviso (Job Requirements Comparison) ****************************************************** -->
   if (g_Project == "Proviso (Job Requirements Comparison)")
      {document.getElementById("Inject_Projects_Text").innerHTML = `
         <div class="hxNotes">
            I wrote <keyword>Proviso</keyword>, an App to compare a Company's Job Requirements with a list of Skills to see how they match. After creating several repetitive cover letters for job applications, I thought there should be a better way to do this tedious task. So, I wrote <keyword>Proviso</keyword>. <br><br>
            It includes a Text Comparison and Scoring Function which I wrote specifically for <keyword>Proviso</keyword>. It also includes primitive "Machine Learning" concepts to help the App "learn" every time a comparison is made (Requirements vs Skills). The resulting output is a Cover Letter showing how the Company's Requirements match up to the Skills List (Excel, VBA).
            <br><br>(Jun 2018 – Present)
         </div>
         `
      return;
      }

   <!-- *** //List_Compare (Excel)// ******************************************************************* -->
   if (g_Project == "List_Compare (Excel)")
      {document.getElementById("Inject_Projects_Text").innerHTML = `
         <div class="hxNotes">
            I wrote <keyword>List_Compare</keyword> to compare two text lists and see how well they match. Part of my creative process was to first write a Text_Comparison Function with a scoring system to help match the two Lists.<br><br>
            This function is used in <keyword>Proviso</keyword>, my Requirements Comparison App, to “Guess” Skills from a Requirement or a Requirement from Skills. <br><br>
            It is also used in a stand-alone <keyword>Text_Compare</keyword> App within Excel (Excel, VBA).
            <br><br>(Apr 2020 – Present)
         </div>
         <hr>
         <div class="hxNotes">
            Screen Shot: &#x1405;&nbsp;<a href="./Images/Projects_List_Compare.jpg#view=FitH" target="_blank">View Full-Screen</a><br><br>
            <img src="./Images/Projects_List_Compare.jpg" width="100%">
         </div>
         `
      return;
      }

   <!-- *** //ProSpec (ETL Mapping App)// ******************************************************************* -->
   if (g_Project == "ProSpec (ETL Mapping App)")
      {document.getElementById("Inject_Projects_Text").innerHTML = `
         <div class="hxNotes">
            I wrote <keyword>ProSpec</keyword>, an ETL Specification Mapping System to solve a programming problem. Our company entered ETL Specifications into a word processor, which were then passed to the Programmers to manually type into a conversion program. I soon realized that this method was slow and inefficient, not to mention a poor utilization of the Programmer's time. As a result, my manager tasked me with creating an automated system in MS Access (<keyword>ProSpec</keyword>) which would allow the ETL Specifications to be entered and maintained in a more efficient and modern manner. After using the system for a short time, I added the capability to export the ETL conversion steps as COBOL code, directly from the Specification. This saved a lot of time and made the process more efficient and accurate. <br><br>
            When we upgraded our database to SQL Server, I also updated <keyword>ProSpec</keyword> to export the conversion steps as SQL scripts. This enhancement imported the data directly into the customer's SQL database tables without writing code or compiling programs (Access, VBA, SQL, T-SQL).<br><br>
            In an early Cost Analysis, a data conversion that normally would have taken 2 months was accomplished in 2 weeks using the <keyword>ProSpec</keyword> Application. This represented a savings of $3,000 for this particular conversion. Subsequent  conversions experienced similar savings. <br><br>
            (Mar 1995 – Oct 2004)
            <hr>
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Case_Study.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Case Study</keyword> in a new window.<br>
            &#x1405;&nbsp;Click <a href="./Files/Port_Thomson_Success_Story.pdf#view=FitH" target="_blank">here</a> for a Full-Screen view of <keyword>ProSpec: A Success Story</keyword> in a new window.
            </div>
         `
      return;
      }

   if (g_Project = " ")
      {
         document.getElementById("Inject_Projects_Heading").innerHTML = "";
         document.getElementById("Inject_Projects_Text").innerHTML = "";
         return;
      }

   // Fall-Through - Unknown Topic Selected
   console.log ("@1953 Click_Projects_List: FAIL: (" + g_Project + ")");
   document.getElementById("Inject_Projects_Heading").innerHTML = "Unknown Topic";
   document.getElementById("Inject_Projects_Text").innerHTML = "";
   return;
   }
// *** End of Click_Projects_List **************************************************************************************

/*
// Unknown why this failed
Function SortArrayByName (pxArray)
   {
   return pxArray.sort
      (function(a, b)
         {
            var nameA = a.Name.toUpperCase();
            var nameB = b.Name.toUpperCase();
            if (nameA < nameB) {return -1;};
            if (nameA > nameB) {return 1;};
            return 0;
         }
      )
   }
*/
