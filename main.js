// switch between expanded and non expanded
var flag = true;

// add row into table
function addRow() {

    // delete row
    if(flag === false){
        for(let i = 0; i < 4; i++){
            var xTable = document.getElementById('myTable');
            var index = xTable.rows.length - 1;
            document.getElementById("myTable").deleteRow(index);

            // document.getElementById("myTable").deleteRow(7);
        }

        changeSpan(">");
    }
    else{
        // add row


        for(let i = 0; i < 4; i++){
            var table = document.getElementById("myTable");
            var index = table.rows.length;
            var row = table.insertRow(index);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            cell1.innerHTML = "";
            cell2.innerHTML = "";
            cell3.innerHTML = "307.5 MB";
            cell4.innerHTML = "Chunk";
            cell5.innerHTML = "";
            if(i === 0){
                cell6.innerHTML = '&nbsp;&nbsp;&nbsp;' + "Processed";
                cell6.insertAdjacentHTML('afterbegin',"<i class='bi bi-cloud-check-fill cloud-icon icon-style'></i>");
            }
            else{
                cell6.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;' + "Processing...";
                cell6.insertAdjacentHTML('afterbegin',"<i class='spinner-border spinner-border-sm text-primary icon-style'></i>");
            }
            cell7.innerHTML = "";
            cell8.innerHTML = "";

            // adding class
            cell3.className = 'sm-table-col';
            cell4.className = 'sm-table-col';
            cell6.className = 'sm-table-col';
        }

        changeSpan("^");
    }
    flag = !flag;
  }

  function changeSpan(val) {
    const span = document.getElementById('span');
    span.innerHTML = ``;

    if(val === "^") span.insertAdjacentHTML('afterbegin',"<i class='bi bi-caret-down-fill'></i>");
    else span.insertAdjacentHTML('afterbegin',"<i class='bi bi-caret-right-fill'></i>");
  }

  // delete the row
  function deleteRow(){
    document.getElementById("myTable").deleteRow(2);
    alert("Are you sure? AWS_Oct22.pdf will get permanently delete");
  }