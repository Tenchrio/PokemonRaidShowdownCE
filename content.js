document.querySelector('#p1').style.background = '#F19090'
document.querySelector('#p1 legend').setHTML('RAID')

node = document.querySelector('.select2-choice');
node.insertAdjacentHTML('afterend', '<select class="calc-trigger set-raid"><option>------</option><option>4* Raid</option><option>5* Raid</option><option>6* Raid</option><option>7* Raid</option></select>');

node2 = document.querySelector('#mainResult');
node2.insertAdjacentHTML('afterend','<div id="raid-needs"></div>');

function OnRaidChange(){
 var raidVal = document.querySelector('.set-raid').value;

 switch(raidVal)
  {
   case '4* Raid':
	//Level to 45
	document.querySelector('#levelL1').value=45;
	document.querySelector('#raid-needs').innerHTML = 'Raid needs 1200+ % for OHKO';
   break;
   case '5* Raid':
        //Level to 5
        document.querySelector('#levelL1').value=75;
	document.querySelector('#raid-needs').innerHTML = 'Raid needs 2000+ % for OHKO';
   break;
   case '6* Raid':
        //Level to 75
        document.querySelector('#levelL1').value=75;
        document.querySelector('#raid-needs').innerHTML = 'Raid needs 2500+ % for OHKO';
   break;
   case '7* Raid':
	//Level to 100
	document.querySelector('#levelL1').value=100;
	document.querySelector('#raid-needs').innerHTML = 'Raid needs 2500+ % for OHKO';
   break;
  }
 //Set Evs to None
 document.querySelector('#p1').querySelectorAll('.evs').forEach(function(element) { element.value = 0});
 //Set tera type to on
 document.querySelector('#p1').querySelector('.teraToggle').checked = true;
 //Set Item to none
 document.querySelector('#itemL1').value = ''; 

 document.querySelector('#levelL1').focus();
 var aWorkingEnterEvent =  new KeyboardEvent('keyup', { isTrusted: true,
   altKey: false,
   bubbles: true,
   cancelBubble: false,
   cancelable: true,
   charCode : 0,
   code: "Enter",
   composed: true,
   ctrlKey: false,
   currentTarget: null,
   defaultPrevented: false,
   detail: 0,
   eventPhase: 0,
   isComposing: false,
   key: "Enter",
   keyCode: 13,
   location: 0,
   metaKey: false,
   repeat: false,
   returnValue: true,
   shiftKey: false,
   which: 13
   });
   document.querySelector('#levelL1').dispatchEvent(aWorkingEnterEvent);
   document.querySelector(".set-raid").value = '------';
}

document.querySelector('.set-raid').addEventListener("change",OnRaidChange);
