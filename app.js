
const selectedSignals = [];

function toggleSignal(id){

    const marker = document.getElementById("marker"+id);
    const list = document.getElementById("selectedList");

    const index = selectedSignals.indexOf(id);

    if(index === -1){

        selectedSignals.push(id);
        marker.style.background = "#e53935";

    }else{

        selectedSignals.splice(index,1);
        marker.style.background = "#1976d2";

    }

    list.innerHTML="";

    if(selectedSignals.length===0){

        list.innerHTML="<li>선택된 교차로가 없습니다.</li>";
        return;

    }

    selectedSignals.forEach(function(signal){

        const li=document.createElement("li");
        li.innerHTML=signal+"번 교차로";
        list.appendChild(li);

    });

}
