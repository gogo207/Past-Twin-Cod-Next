module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px",
        "HalfUnit": "8px",
        "TwoUnits": "32px",
        "FourUnits": "64px",
        "FiveUnits": "80px",
        "ThreeUnits": "48px",
        "Unit": "16px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px"
      },
      "scale": {
        "XXLarge": "288px",
        "Medium": "96px",
        "Small": "48px",
        "Large": "144px",
        "XSmall": "16px",
        "XLarge": "192px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}