var sectionsInfo = {
    "roadTransport": {
        "petrol": "roadtransport_petrol_section",
        "disel": "roadtransport_disel_section"
    },
    "railwayTransport": {
        "petrol": "railwaytransport_petrol_section",
        "disel": "railwaytransport_disel_section"
    },
    "selectedTransport": "roadTransport",
    "selectedFuel": "petrol",
}

function switchSections(transport, fuel) {
    console.log("");
    console.log(transport + " " + fuel);
    let tableId = sectionsInfo[transport][fuel];
    let selectedTransport = sectionsInfo["selectedTransport"];
    let selectedFuel = sectionsInfo["selectedFuel"];

    document.getElementById(sectionsInfo[selectedTransport][selectedFuel]).style.display = 'none';
    console.log(tableId);
    document.getElementById(tableId).style.display = null;
    console.log(document.getElementById(tableId));

    document.getElementById("select_button_" + sectionsInfo["selectedTransport"]).classList.remove("selected_button");
    document.getElementById("select_button_" + sectionsInfo["selectedFuel"]).classList.remove("selected_button");

    document.getElementById("select_button_" + transport).classList.add("selected_button");
    document.getElementById("select_button_" + fuel).classList.add("selected_button");

    sectionsInfo["selectedTransport"] = transport;
    sectionsInfo["selectedFuel"] = fuel;
}

function switchTansport(transport) {
    switchSections(transport, sectionsInfo["selectedFuel"]);
}

function switchFuel(fuel) {
    switchSections(sectionsInfo["selectedTransport"], fuel);
}