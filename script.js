$(function () {
  var airportValues = [
    {
      value: "London All, United Kingdom (LON)",
      id: 1,
      cityName: "London All",
      countryName: "United Kingdom",
      airportName: "London Airports",
      airportCode: "LON",
      cityCode: "LON",
      countryCode: "GB",
      airportCountryLabel: "London All, United Kingdom",
    },
    {
      value: "London City, United Kingdom (LCY)",
      id: 2,
      cityName: "London City",
      countryName: "United Kingdom",
      airportName: "London City Airport",
      airportCode: "LCY",
      cityCode: "LON",
      countryCode: "GB",
      airportCountryLabel: "London City, United Kingdom",
    },
    {
      value: "Londonderry, United Kingdom (LDY)",
      id: 3,
      cityName: "Londonderry",
      countryName: "United Kingdom",
      airportName: "London Eglinton Airport",
      airportCode: "LDY",
      cityCode: "LON",
      countryCode: "GB",
      airportCountryLabel: "Londonderry, United Kingdom",
    },
    {
      value: "London Gatwick, United Kingdom (LGW)",
      id: 4,
      cityName: "London Gatwick",
      countryName: "United Kingdom",
      airportName: "London Gatwick Airport",
      airportCode: "LGW",
      cityCode: "LON",
      countryCode: "GB",
      airportCountryLabel: "London Gatwick, United Kingdom",
    },
    {
      value: "London Heathrow, United Kingdom (LHR)",
      id: 5,
      cityName: "London Heathrow",
      countryName: "United Kingdom",
      airportName: "London Heathrow Airport",
      airportCode: "LHR",
      cityCode: "LON",
      countryCode: "GB",
      airportCountryLabel: "London Heathrow, United Kingdom",
    },
    {
      value: "London Stansted, United Kingdom (STN)",
      id: 6,
      cityName: "London Stansted",
      countryName: "United Kingdom",
      airportName: "London Stansted Airport",
      airportCode: "STN",
      cityCode: "LON",
      countryCode: "GB",
      airportCountryLabel: "London Stansted, United Kingdom",
    },
  ];

  initializeAutocomplete("#destination", airportValues, "#Destination-values");
  initializeAutocomplete("#departure", airportValues, "#Destination-values");
  function initializeAutocomplete(elementId, sourceValue, appendToElementId) {
    $(elementId)
      .autocomplete({
        minLength: 0,
        appendTo: appendToElementId,
        source: sourceValue,
        select: function (event, ui) {
          console.log(ui, "ui");
          $(elementId).val(ui.item.airportCountryLabel);
          $(elementId + "-id").val(ui.item.airportCountryLabel);
          $(elementId + "-description").html(ui.item.airportCountryLabel);
          return false;
        },
      })
      .autocomplete("instance")._renderItem = function (ul, item) {
      return $("<li>").append(`<div class='destination-item d-flex align-items-center p-2'><img src='https://cdn.iconscout.com/icon/free/png-256/free-flight-1780527-1517617.png' alt='flight' width='15' height='15' /><span>${item.value}</span></div>`).appendTo(ul);
    };
  }
});
