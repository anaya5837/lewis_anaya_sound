while (true) {
    console.log("Sound Level: " + input.soundLevel())
    if (input.soundLevel() > 30) {
        light.setAll(light.rgb(100, 100, 100))
    } else {
        light.clear
    }
    
}
