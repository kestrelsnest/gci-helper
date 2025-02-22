export function prettyAircraftName(aircraft: any) {
    switch (aircraft) {
        case "AJS37": return "AJS-37 Viggen";
        case "AV8BNA": return "AV-8B Harrier II";
        case "Mirage-F1CE": return "Mirage F1 CE";
        case "Mirage-F1BE": return "Mirage F1 BE";
        case "Mirage-F1EE": return "Mirage F1 EE";
        case "Mirage-F1M-EE": return "Mirage F1 M";
        case "M-2000C": return "Mirage 2000C";
        case "MiG-21Bis": return "MiG-21bis";
        case "JF-17": return "JF-17 Thunder";
        case "F-5E-3": return "F-5E Tiger";
        case "F-14A-135-GR": return "F-14A Tomcat";
        case "F-14A-95-GR": return "F-14A Tomcat";
        case "F-14B": return "F-14B Tomcat";
        case "F-15C": return "F-15C Eagle";
        case "F-15ESE": return "F-15E Strike Eagle";
        case "FA-18C_hornet": return "F/A-18C Hornet";
        case "F-16C_50": return "F-16C Viper";
        case "A-4E-C": return "A-4E Skyhawk";
        case "A-10A": return "A-10A Warthog";
        case "A-10C": return "A-10C Warthog";
        case "A-10C_2": return "A-10C Warthog";
        case "AH-64D_BLK_II": return "AH-64D Apache";
        case "UH-1H": return "UH-1H Huey";
        case "Mi-8MT": return "Mi-8MT Hip";
        case "Mi-24P": return "Mi-24P Hind";
        case "SA342M": return "SA-342M Gazelle";
        case "SA342L": return "SA-342L Gazelle";
        case "Su-25T": return "Su-25T Frogfoot";
        case "Su-25": return "Su-25 Frogfoot";
        case "Su-27": return "Su-27 Flanker";
        case "MiG-29S": return "MiG-29S Fulcrum";
        default: return aircraft;
    }
}
