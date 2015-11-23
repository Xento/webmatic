// Übersetzungen von HomeMatic IDs zu sprechenden Texten für alle
// Controls, die nicht direkt im webmatic.js abgehandelt werden.

//DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    AKKU__LEVEL: "LEVEL",
    AKKU__STATUS: "STATUS",
    ALARMACTUATOR__STATE: "STATE",
    ALARMACTUATOR__ERROR_POWER__true: "Netzspannung fehlerhaft",
    ALARMACTUATOR__ERROR_POWER__false: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__true: "Sabotage ausgel&ouml;st",
    ALARMACTUATOR__ERROR_SABOTAGE__false: "-",
    ALARMACTUATOR__ERROR_BATTERY: "ERROR_BATTERY",
    ALARMACTUATOR__ON_TIME: "ON_TIME",
    ALARMACTUATOR__INHIBIT: "INHIBIT",
    ALARMACTUATOR__WORKING: "WORKING",
    ALARMACTUATOR__LOWBAT: "LOWBAT",
    BLIND__STOP: "Anhalten",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "F&uuml;llstand",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "Frequenzwert des Sensors",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__true: "An",
    CLIMATECONTROL_REGULATOR__STATE__false: "Aus",
    CLIMATECONTROL_REGULATOR__LEVEL: "LEVEL",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR: "MODE_TEMPERATUR_REGULATOR",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "TEMPERATUR_COMFORT_VALUE",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "TEMPERATUR_LOWERING_VALUE",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "TEMPERATUR_WINDOW_OPEN_VALUE",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "PARTY_END_TIME",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "Temperatur",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "Ventil fest",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "Einstellungsbereicht zu gro&szlig;",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "Einstellungsbereicht zu klein",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Verbindungsfehler",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "Batteriestand niedrig",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "Ventil Positionsfehler",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "Ventil&ouml;ffnung",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "Boost",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "Absenken",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "Manuell",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "Komfort",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "Automatisch",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "Boostdauer",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "Batteriestatus",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "PARTY_MODE_SUBMIT",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "PARTY_TEMPERATURE",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "PARTY_START_TIME",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "PARTY_START_DAY",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "PARTY_START_MONTH",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "PARTY_START_YEAR",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "PARTY_STOP_TIME",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "PARTY_STOP_DAY",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "PARTY_STOP_MONTH",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "PARTY_STOP_YEAR",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "CLEAR_WINDOW_OPEN_SYMBOL",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "SET_SYMBOL_FOR_HEATING_PHASE",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE: "WINDOW_STATE",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "Ventil&ouml;ffnung",
    CLIMATECONTROL_VENT_DRIVE__ERROR_0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR_1: "Ventilantrieb blockiert",
    CLIMATECONTROL_VENT_DRIVE__ERROR_2: "Ventilantrieb lose",
    CLIMATECONTROL_VENT_DRIVE__ERROR_3: "Einstellungsbereicht zu klein",
    CLIMATECONTROL_VENT_DRIVE__ERROR_4: "Batteriestand niedrig",
    CLIMATECONTRIL_VENT_DRIVE__VALVE_OFFSET_VALUE: "Ventilantrieb Offsetstellung",
    CONDITION_POWER__DECISION_VALUE: "DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_INPUT__FREQUENCY: "DIGITAL_INPUT__FREQUENCY",
    DIGITAL_OUTPUT__STATE: "STATE",   
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "DIMMER__TOGGLE",
    DIMMER__PROG_DIM_UP: "PROG_DIM_UP",
    DIMMER__PROG_DIM_DOWN: "PROG_DIM_DOWN",
    DIMMER__OLD_LEVEL: "OLD_LEVEL",
    DIMMER__RAMP_TIME: "RAMP_TIME",
    DIMMER__ON_TIME: "ON_TIME",
    DIMMER__RAMP_STOP: "RAMP_STOP",
    DIMMER__INHIBIT: "INHIBIT",
    DIMMER__WORKING: "WORKING",
    DIMMER__DIRECTION: "DIRECTION",
    DIMMER__ERROR: "ERROR",
    DIMMER__ERROR_REDUCED: "Reduzierte Leistung",
    DIMMER__ERROR_OVERHEAT: "&Uuml;berhitzung",
    DIMMER__ERROR_OVERLOAD: "Strom-&Uuml;berlastung",
    DIMMER__LEVEL_REAL: "LEVEL_REAL",
    DISPLAY__TEXT: "TEXT",
    DISPLAY__BULB: "BULB",
    DISPLAY__SWITCH: "SWITCH",
    DISPLAY__WINDOW: "WINDOW",
    DISPLAY__DOOR: "DOOR",
    DISPLAY__BLIND: "BLIND",
    DISPLAY__SCENE: "SCENE",
    DISPLAY__PHONE: "PHONE",
    DISPLAY__BELL: "BELL",
    DISPLAY__CLOCK: "CLOCK",
    DISPLAY__ARROW_UP: "ARROW_UP",
    DISPLAY__ARROW_DOWN: "ARROW_DOWN",
    DISPLAY__UNIT: "UNIT",
    DISPLAY__BEEP: "BEEP",
    DISPLAY__BACKLIGHT: "BACKLIGHT",
    DISPLAY__SUBMIT: "SUBMIT",
    DISPLAY__ALARM_COUNT: "ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "Kurzer Tastendruck",
    INPUT_OUTPUT__PRESS_LONG: "Langer Tastendruck",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "Status aus",
    KEY__LED_STATUS__1: "Status rot",
    KEY__LED_STATUS__2: "Status gr&uuml;n",
    KEY__LED_STATUS__3: "Status orange",
    KEY__LED_SLEEP_MODE: "LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "Kurzer Tastendruck",
    KEY__PRESS_LONG: "Langer Tastendruck",
    KEY__SUBMIT: "SUBMIT",
    KEY__SEND: "SEND",
    KEY__RESET: "RESET",
    KEYMATIC__STATE: "STATE",
    KEYMATIC__OPEN: "&Ouuml;ffnen",
    KEYMATIC__RELOCK_DELAY: "RELOCK_DELAY",
    KEYMATIC__STATE_UNCERTAIN: "STATE_UNCERTAIN",
    KEYMATIC__DIRECTION: "DIRECTION",
    KEYMATIC__INHIBIT: "INHIBIT",
    KEYMATIC__ERROR: "ERROR",
    MOTION_DETECTOR__BRIGHTNESS: "Helligkeit",
    MOTION_DETECTOR__SET_BRIGHTNESS: "MOTION_DETECTOR__SET_BRIGHTNESS",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "NEXT_TRANSMISSION",
    MOTION_DETECTOR__MOTION: "MOTION",
    MOTION_DETECTOR__SET_MOTION: "MOTION_DETECTOR__SET_MOTION",
    MOTION_DETECTOR__ERROR: "ERROR",
    POWER__LOWBAT: "Batteriestand niedrig",
    POWERMETER__BOOT: "BOOT",
    POWERMETER__ENERGY_COUNTER: "ENERGY_COUNTER",
    POWERMETER__POWER: "POWER",
    POWERMETER__CURRENT: "CURRENT",
    POWERMETER__VOLTAGE: "VOLTAGE",
    POWERMETER__FREQUENCY: "FREQUENCY",
    POWERMETER_IGL__BOOT: "BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "GAS_ENERGY_COUNTER",
    POWERMETER_IGL__GAS_POWER: "GAS_POWER",
    POWERMETER_IGL__ENERGY_COUNTER: "ENERGY_COUNTER",
    POWERMETER_IGL__POWER: "POWER",
    PULSE_SENSOR__SEQUENCE_OK: "SEQUENCE_OK",
    RAINDETECTOR__STATE: "RAINDETECTOR__STATE",
    RAINDETECTOR_HEAT__STATE: "STATE",
    RAINDETECTOR_HEAT__ON_TIME: "ON_TIME",
    RAINDETECTOR_HEAT__INHIBIT: "INHIBIT",
    RAINDETECTOR_HEAT__WORKING: "WORKING",
    RELAIS__STATE: "STATE",
    RELAIS__VALUE: "VALUE",
    RELAIS__TRANS: "TRANS",
    RELAIS__ON_TIME: "ON_TIME",
    RELAIS__RAMP_TIME: "RAMP_TIME",
    RGBW_AUTOMATIC__PROGRAM__0: "Aus",
    RGBW_AUTOMATIC__PROGRAM__1: "langsam",
    RGBW_AUTOMATIC__PROGRAM__2: "normal",
    RGBW_AUTOMATIC__PROGRAM__3: "schnell",
    RGBW_AUTOMATIC__PROGRAM__4: "Lagerfeuer",
    RGBW_AUTOMATIC__PROGRAM__5: "Wasserfall",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "ON_TIME",
    RGBW_AUTOMATIC__RAMP_TIME: "RAMP_TIME",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "ACT_BRIGHTNESS",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "INHIBIT",
    RGBW_AUTOMATIC__USER_PROGRAM: "USER_PROGRAM",
    RGBW_COLOR__COLOR: "Farbe",
    RGBW_COLOR__ON_TIME: "ON_TIME",
    RGBW_COLOR__RAMP_TIME: "RAMP_TIME",
    RGBW_COLOR__ACT_BRIGHTNESS: "ACT_BRIGHTNESS",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "ACT_HSV_COLOR_VALUE",
    RGBW_COLOR__ON_TIME_STORE: "ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "INHIBIT",
    RGBW_COLOR__USER_COLOR: "USER_COLOR",    
    ROTARY_HANDLE_SENSOR__STATE__0: "Geschlossen",
    ROTARY_HANDLE_SENSOR__STATE__1: "Gekippt",
    ROTARY_HANDLE_SENSOR__STATE__2: "Ge&ouml;ffnet",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "Sabotage ausgel&ouml;st",
    ROTARY_HANDLE_SENSOR__LOWBAT__true: "Batteriestand niedrig",
    ROTARY_HANDLE_SENSOR__LOWBAT__false: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "-",
    SENSOR__CONTROL: "SENSOR__CONTROL",
    SENSOR__SENSOR: "SENSOR",
    SENSOR__STATE: "STATE",
    SENSOR__MEAN5MINUTES: "Durchschnittsverbrauch (5 Min)",
    SENSOR__MAX5MINUTES: "Maximalverbrauch (5 Min)",
    SENSOR__SUM_1H: "Verbrauch letzte Stunde",
    SENSOR__MAX_1H: "Maximalverbrauch letzte Stunde",
    SENSOR__SUM_24H: "Verbrauch (24 Std)",
    SENSOR__MAX_24H: "Maximalverbrauch (24 Std)",
    SENSOR__METER: "Z&auml;hlerstand",
    SENSOR__LAST_VALUE: "Durchschnittsverbrauch im letzten Messintervall",
    SENSOR__LAST_TICKS: "LAST_TICKS",
    SENSOR__UNITSPTURN: "UNITSPTURN",
    SENSOR__DISTANCE: "DISTANCE",
    SENSOR__F_PERCENT: "F_PERCENT",
    SENSOR__F_LEVEL: "F_LEVEL",
    SENSOR__F_VOLUME: "F_VOLUME",
    SENSOR__RELAIS1: "RELAIS1",
    SENSOR__RELAIS2: "RELAIS2",
    SENSOR_FOR_CARBON_DIOXIDE__STATE: "STATE",    
    SHUTTER_CONTACT__STATE__true: "Offen",
    SHUTTER_CONTACT__STATE__false: "Geschlossen",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "Sabotage ausgel&ouml;st",
    SHUTTER_CONTACT__LOWBAT__true: "Batteriestand niedrig",
    SHUTTER_CONTACT__LOWBAT__false: "-",
    SIGNAL_CHIME__STATE: "STATE",
    SIGNAL_CHIME__ON_TIME: "ON_TIME",
    SIGNAL_CHIME__INHIBIT: "INHIBIT",
    SIGNAL_CHIME__WORKING: "WORKING", 
    SIGNAL_CHIME__SUBMIT: "SUBMIT",
    SIGNAL_LED__STATE: "STATE",
    SIGNAL_LED__ON_TIME: "ON_TIME",
    SIGNAL_LED__INHIBIT: "INHIBIT",
    SIGNAL_LED__WORKING: "WORKING",  
    SIGNAL_LED__SUBMIT: "SUBMIT",
    SMOKE_DETECTOR__STATE: "STATE",
    SMOKE_DETECTOR__ERROR_ALARM_TEST: "ERROR_ALARM_TEST",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER: "ERROR_SMOKE_CHAMBER",
    SMOKE_DETECTOR__LOWBAT: "LOWBAT",
    STATUS_INDICATOR__STATE: "STATE",
    STATUS_INDICATOR__ON_TIME: "ON_TIME",
    STATUS_INDICATOR__INHIBIT: "INHIBIT",
    STATUS_INDICATOR__WORKING: "WORKING",
    SYSTEM__TIMER_STOP: "TIMER_STOP",
    SYSTEM__TIMER_SET: "TIMER_SET",
    SYSTEM__TIMER_EVENT: "TIMER_EVENT",
    SYSTEM__STATE: "STATE",
    SYSTEM__TIMER_GET: "TIMER_GET",
    SYSTEM__CMD_RET: "CMD_RET",
    SYSTEM__WORKING: "WORKING",
    SYSTEM__LEVEL: "LEVEL",
    SYSTEM__OLD_LEVEL: "OLD_LEVEL",
    SYSTEM__STOP: "STOP",
    SYSTEM__CMD_RUNS: "CMD_RUNS",
    SYSTEM__CMD_RUNL: "CMD_RUNL",
    SYSTEM__CMD_SETS: "CMD_SETS",
    SYSTEM__CMD_SETL: "CMD_SETL",
    SYSTEM__CMD_RETS: "CMD_RETS",
    SYSTEM__CMD_RETL: "CMD_RETL",
    SYSTEM__CMD_QUERY_RET: "CMD_QUERY_RET",
    SYSTEM__CMD_EXEC: "CMD_EXEC",
    SYSTEM__CMD_KILL: "CMD_KILL",
    SYSTEM__LOGIT: "LOGIT",
    SYSTEM__SYSLOG: "SYSLOG",
    SYSTEM__SET_STATE: "SET_STATE",
    SYSTEM__RAND: "RAND",
    SYSTEM__HOLD: "HOLD",
    SYSTEM__CONTROL: "CONTROL",
    SYSTEM__SEND: "SEND",
    SYSTEM__MAILTO: "MAILTO",
    SYSTEM__MAILCC: "CC",
    SYSTEM__SUBJECT: "SUBJECT",
    SYSTEM__TYPE: "TYPE",
    SYSTEM__TEXT: "TEXT",
    SYSTEM__TEMPLATEID: "TEMPLATEID",
    SYSTEM__OPTION_1: "OPTION_1",
    SYSTEM__OPTION_2: "OPTION_2",
    SYSTEM__OPTION_3: "OPTION_3",
    SYSTEM__OPTION_4: "OPTION_4",
    SYSTEM__OPTION_5: "OPTION_5",
    SYSTEM__RETURN: "RETURN",
    SYSTEM__PHONE: "PHONE",
    SYSTEM__PRIORITY: "PRIORITY",
    SYSTEM__APIKEY: "APIKEY",
    SWITCH__INFO: "INFO",
    SWITCH__IP: "IP",
    SWITCH__UNREACH_CTR: "UNREACH_CTR",
    SWITCH__STATE__true: "An",
    SWITCH__STATE__false: "Aus",
    SWITCH__ON_TIME: "-",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "WORKING",
    SWITCH__TOGGLE: "SWITCH__TOGGLE",
    SWITCH__PROG_TIMER: "PROG_TIMER",
    SWITCH__SWITCH_1H: "SWITCH_1H",
    SWITCH__TIME_ON_1H: "TIME_ON_1H",
    SWITCH__TIME_OFF_1H: "TIME_OFF_1H",
    SWITCH__TIME_ON: "TIME_ON",
    SWITCH__TIME_OFF: "TIME_OFF",
    SWITCH__TIME_ON_SUM: "TIME_ON_SUM",
    SWITCH__SWITCH_SUM: "SWITCH_SUM",
    SWITCH__TIME_ON_EVENT: "TIME_ON_EVENT",
    SWITCH__TIME_OFF_EVENT: "TIME_OFF_EVENT",
    SWITCH__TIME_STATE: "TIME_STATE",
    SWITCH__SUM_RESET: "SUM_RESET",
    SWITCH__SET_STATE: "SET_STATE",
    SWITCH_INTERFACE__PRESS: "PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING: "Batteriestand niedrig",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING: "THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING: "THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "Temperatur",
    THERMALCONTROL_TRANSMIT__SET_TEMPERATURE: "SET_TEMPERATURE",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "Aktuelle Luftfeuchtigkeit",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "Boost",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "Absenken",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "Manuell",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "Komfort",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "Automatisch",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "PARTY_MODE_SUBMIT",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "PARTY_TEMPERATURE",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "PARTY_START_TIME",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "PARTY_START_DAY",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "PARTY_START_MONTH",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "PARTY_START_YEAR",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "PARTY_STOP_TIME",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "PARTY_STOP_DAY",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "PARTY_STOP_MONTH",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "PARTY_STOP_YEAR",
    TILT_SENSOR__STATE: "STATE",
    TILT_SENSOR__LOWBAT: "LOWBAT",
    VIRTUAL_DIMMER__OLD_LEVEL: "OLD_LEVEL",
    VIRTUAL_DIMMER__RAMP_TIME: "RAMP_TIME",
    VIRTUAL_DIMMER__ON_TIME: "ON_TIME",
    VIRTUAL_DIMMER__RAMP_STOP: "RAMP_STOP",
    VIRTUAL_DIMMER__INHIBIT: "INHIBIT",
    VIRTUAL_DIMMER__WORKING: "WORKING",
    VIRTUAL_DIMMER__DIRECTION: "DIRECTION",
    VIRTUAL_DIMMER__ERROR: "ERROR",
    VIRTUAL_DIMMER__ERROR_REDUCED: "Reduzierte Leistung",
    VIRTUAL_DIMMER__ERROR_OVERHEAT: "&Uuml;berhitzung",
    VIRTUAL_DIMMER__ERROR_OVERLOAD: "Strom-&Uuml;berlastung",
    VIRTUAL_DIMMER__LEVEL_REAL: "LEVEL_REAL",
    VIRTUAL_KEY__PRESS_SHORT: "Kurzer Tastendruck",
    VIRTUAL_KEY__PRESS_LONG: "Langer Tastendruck",
    VIRTUAL_KEY__LEVEL: "VIRTUAL_KEY__LEVEL",
    WATERDETECTIONSENSOR__STATE: "STATE",
    WATERDETECTIONSENSOR__LOWBAT: "WATERDETECTIONSENSOR__LOWBAT",
    WEATHER__HUMIDITY: "Luftfeuchtigkeit",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "Temperatur",
    WEATHER__WIND_SPEED: "Windgeschwindigkeit",
    WEATHER__WIND_DIRECTION: "Windrichtung",
    WEATHER__WIND_DIRECTION_RANGE: "WIND_DIRECTION_RANGE",
    WEATHER__SUNSHINEDURATION: "SUNSHINEDURATION",
    WEATHER__RAINING: "sofortige Regenerkennung",
    WEATHER__RAIN_COUNTER: "Regenmenge",
    WEATHER__RAIN_CTR: "Regenmenge",
    WEATHER__DEW_POINT: "Taupunkt",
    WEATHER__ABS_HUMIDITY: "Absolute Luftfeuchtigkeit",
    WEATHER__TEMP_MIN_24H: "Min. Temperatur (24 Std)",
    WEATHER__TEMP_MAX_24H: "Max. Temperatur (24 Std)",
    WEATHER__HUM_MIN_24H: "Min. Luftfeuchtigkeit (24 Std)",
    WEATHER__HUM_MAX_24H: "Max. Luftfeuchtigkeit (24 Std)",
    WEATHER__WIND_MAX_24H: "Max. Windgeschwindigkeit (24 Std)",
    WEATHER__RAIN_CTR_24H: "Regenmenge (24 Std)",
    WEATHER__MISS_24H: "Fehlende Datenpakete (24 Std)",
    WEATHER__BRIGHTNESS: "Helligkeit",
    WEATHER__LOWBAT: "LOWBAT",
    WEATHER__AIR_PRESSURE: "Luftdruck",
    WEATHER__SET_TEMPERATURE: "SET_TEMPERATURE",
    WEATHER__SET_HUMIDITY: "SET_HUMIDITY",
    WEATHER_TRANSMIT__HUMIDITY: "Luftfeuchtigkeit",
    WEATHER_TRANSMIT__TEMPERATURE: "Temperatur",
    WEBCAM__INFO: "INFO",
    WEBCAM__IMAGE: "IMAGE",
    WEBCAM__PTZ_CMD: "PTZ_CMD",
    WEBCAM__IR: "IR",    
    WINMATIC__SPEED: "SPEED",
    WINMATIC__STOP: "Stop",
    WINMATIC__RELOCK_DELAY: "RELOCK_DELAY",
    WINMATIC__STATE_UNCERTAIN: "STATE_UNCERTAIN",
    WINMATIC__DIRECTION: "DIRECTION",
    WINMATIC__INHIBIT: "INHIBIT",
    WINMATIC__WORKING: "WORKING",
    WINMATIC__ERROR: "ERROR",
    WRAPPER__MEDIAN: "MEDIAN",
    WRAPPER__MEAN: "MEAN",
    WRAPPER__SET_STATE: "SET_STATE",
    WRAPPER__TIME_ON_24H: "TIME_ON_24H",
    WRAPPER__TIME_OFF_24H: "TIME_OFF_24H",
    WRAPPER__SWITCH_24H: "SWITCH_24H",
    WRAPPER__PERCENT_ON_24H: "PERCENT_ON_24H",
    WRAPPER__TIME_ON_168H: "TIME_ON_168H",
    WRAPPER__TIME_OFF_168H: "TIME_OFF_168H",
    WRAPPER__SWITCH_168H: "SWITCH_168H",
    WRAPPER__PERCENT_ON_168H: "PERCENT_ON_168H",
    WRAPPER__TIME_ON_HHH: "TIME_ON_HHH",
    WRAPPER__TIME_OFF_HHH: "TIME_OFF_HHH",
    WRAPPER__SWITCH_HHH: "SWITCH_HHH",
    WRAPPER__PERCENT_ON_HHH: "PERCENT_ON_HHH",
    
    ALARMDP__CONFIG_PENDING: "Konfigurationsdaten stehen zur &Uuml;bertragung an",  
    ALARMDP__DEVICE_IN_BOOTLOADER: "Ger&auml;t startet neu",
    ALARMDP__LOWBAT: "Batteriestand niedrig",
    ALARMDP__STICKY_UNREACH: "Kommunikation war gest&ouml;rt",
    ALARMDP__U_SOURCE_FAIL: "Netzteil ausgefallen",
    ALARMDP__UNREACH: "Kommunikation zur Zeit gest&ouml;rt",
    ALARMDP__UPDATE_PENDING: "Update verf&uuml;gbar",
    ALARMDP__USBH_POWERFAIL: "USB-Host deaktiviert",
        
    OPEN: "Offen",
    OPEN_SHORT: "Auf",
    CLOSE: "Geschlossen",
    CLOSE_SHORT: "Zu",
    LOCKED: "Verriegelt",
    LOCK: "Verriegeln",
    ON: "An",
    OFF: "Aus",
    MAX: "Maximum",
    MED: "Medium",
    MIN: "Minimum",
    RUN: "Ausf&uuml;hren",
    UNKNOWN_ERROR: "Unbekannter Fehler"
    
};

var imageMap = {
    ABS_HUMIDITY: "humidity.png",
    ACTUAL_HUMIDITY: "humidity.png",
    ACTUAL_TEMPERATURE: "temperature.png",
    HUM_MAX_24H: "humidity.png",
    HUM_MIN_24H: "humidity.png",
    HUMIDITY: "humidity.png",
    TEMP_MAX_24H: "temperature.png",
    TEMP_MIN_24H: "temperature.png",
    TEMPERATURE: "temperature.png"
};

//1 = true/false -> Error/OK
//2 = 0/1/other -> OK/Warning/Error
//3 = true/false -> Warning/OK
//4 = 0/other -> Hide/Warning
//5 = true/false Error/NoError
//6 = true/false Warning/NoError
//7 = 0/1/2/other -> NoError/NoError/NoError/Warning 
//8 = true/false -> Warning/Hide
var typeState = {
    AKKU__STATUS: 7,
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING: 4,
    CLIMATECONTROL_VENT_DRIVE__ERROR: 4,
    POWER__LOWBAT: 1,
    ROTARY_HANDLE_SENSOR__STATE: 2,
    ROTARY_HANDLE_SENSOR__ERROR: 4,
    ROTARY_HANDLE_SENSOR__LOWBAT: 8,
    SENSOR__SENSOR: 1,
    SENSOR_FOR_CARBON_DIOXIDE__STATE: 2,
    SHUTTER_CONTACT__STATE: 3,
    SHUTTER_CONTACT__LOWBAT: 8,
    SHUTTER_CONTACT__ERROR: 4,
    SMOKE_DETECTOR_TEAM__STATE: 1,
    TILT_SENSOR__STATE: 3,
    U_SOURCE_FAIL__POWER: 5,
    WATERDETECTIONSENSOR__STATE: 2,    
    WEATHER__RAINING: 3,    
    WINMATIC__STATE_UNCERTAIN: 6,
    KEYMATIC__STATE_UNCERTAIN: 6
};

var typeInput = {
    ALARMACTUATOR__STATE: "BoolButtonList",
    BLIND__STOP: "ButtonNoRefresh",
    CLIMATECONTROL_REGULATOR__STATE: "BoolButtonList",
    DIGITAL_ANALOG_OUTPUT__STATE: "BoolButtonList",
    DIGITAL_OUTPUT__STATE: "BoolButtonList",
    KEY__PRESS_LONG: "Button",
    KEY__PRESS_SHORT: "Button",
    KEYMATIC__OPEN: "Button",
    KEYMATIC__STATE: "BoolButtonList",
    SWITCH__STATE: "BoolButtonList",
    VIRTUAL_KEY__PRESS_SHORT: "Button",
    VIRTUAL_KEY__PRESS_LONG: "Button",
    WINMATIC__STOP: "ButtonNoRefresh"
};

// Funktion zum mappen der IDs auf Texte.
function mapText(text, defaultText) {
    var newText = "";
    newText = textMap[text];
    
    if(defaultText && !newText){
        newText = textMap[defaultText];
    }

    // Wenn nichts gefunden, dann Originaltext zurück:
    if (!newText) {
        return text;
    } else {
        return newText;
    }
}

// Funktion zum mappen von IDs auf Grafiken:
function mapImage(text) {
    var gfx = "";
    gfx = imageMap[text];

    // Wenn keines gefunden, dann unknown.png zurück:
    if (!gfx) {
        return "unknown.png";
    } else {
        return gfx;
    }
}

//Statusanzeige
function mapState(hssType, deviceHssType, valFloat, valBool) {
    var type = typeState[deviceHssType + "__" + hssType];

    if (type) {
        switch (type) {
            case 1:
                return valBool?"Error":"OK";
            case 2:
                if (valFloat === 0.0) { return "OK"; }
                else if (valFloat === 1.0) { return "Warning"; }
                else return "Error";
            case 3:
                return valBool?"Warning":"OK";
            case 4:
                if (valFloat === 0.0) { return "Hide"; }
                else return "Warning";
            case 5:
                return valBool?"Error":"NoError";
            case 6:
                return valBool?"Warning":"NoError";
            case 7:
                if (valFloat === 0.0) { return "NoError"; }
                else if (valFloat === 1.0) { return "NoError"; }
                else if (valFloat === 2.0) { return "NoError"; }
                else return "Warning";
            case 8:
                return valBool?"Error":"Hide";
        }        
    }
    
    if(hssType === "STATE") return valBool?"OFF":"ON";
    
    return "";
}

//Eingabefelder und Buttons erstellen
function mapInput(deviceHssType, channel, vorDate){
    var channelId = channel['id'];
    var hssType = channel['hssType'];
    var valString = channel['value'];
    
    var input = typeInput[deviceHssType + "__" + hssType];
    
    var txt = textMap[deviceHssType + "__" + hssType];
    
    if(input){
        switch (input) {
            case "BoolButtonList":
                return addSetBoolButtonList(channelId, valString, mapText(deviceHssType + "__" + hssType + "__false"), mapText(deviceHssType + "__" + hssType + "__true"), "", vorDate, true);
            case "Button":
                return addSetButton(channelId, mapText(deviceHssType + "__" + hssType), true, vorDate, false, false, true);
            case "ButtonNoRefresh":
                return addSetButton(channelId, mapText(deviceHssType + "__" + hssType), true, vorDate, false, false, false);
        } 
    }else if(channel['writeable'] === "true" && (!txt || txt !== "-")){
        
        var valType = channel['valueType'];
        var valRead = channel['readable'] === "true"; 
        
        var valUnit = channel['valueUnit'];        
        
        if(valType === "2" && valRead){
            return addSetBoolButtonList(channelId, valString, mapText("OFF"), mapText("ON"), "", vorDate, true);
        }
        if(valType === "2" && !valRead){
            return addSetButton(channelId, mapText("RUN"), true, vorDate, false, false, true);
        }
        if(valType === "4" && valRead){
            var valMin = parseFloat(channel['valueMin']);
            var valMax = parseFloat(channel['valueMax']);
            return addSetNumber(channelId, valString, valUnit, valMin, valMax, 0.001, 1.0, vorDate + " | " + valMin + " " + valUnit + " = " + mapText("OFF") + ", " + valMax + " " + valUnit + " = " + mapText("ON"), false);
        }
        if(valType === "16" && valRead){
            return addSetValueList(channelId, valString, channel['valueList'], valUnit, vorDate, true);
        }
    }
    
    return "";
}