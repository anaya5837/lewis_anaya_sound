while True:
    print("Sound Level: " + input.sound_level()) 
    if input.sound_level() < 30:
        light.set_all(light.rgb(100, 100, 100))
    else:
        light.clear
