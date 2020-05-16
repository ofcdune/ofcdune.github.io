from picamera import PiCamera
import time
import os

os.system("git pull")
with PiCamera() as camera:
    while True:
        print("New cycle, please wait...")
        camera.capture("roomtemp.png")
        os.system("git add .")
        os.system("git commit -m 'roomtemp.png'")
        os.system("git push origin")
        time.sleep(60)

