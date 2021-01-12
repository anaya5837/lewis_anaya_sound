while (true) {
    console.log("Sound Level: " + input.soundLevel())
    if (input.soundLevel() < 10) {
        light.setAll(light.rgb(100, 100, 100))
    } else {
        light.clear
    }
    
}
