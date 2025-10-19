import os
import random

Path = "./"
NAMES=["neo", "core", "bright", "blue", "nova", "prime", "true", "open", "silver", "iron", "alpha", "quant", "pixel", "wave"]
NOUNS = ["network", "path", "spark", "garden", "frame", "pilot", "pulse", "orbit", "pixel"]

class JsonDataGenerator():
    def __init__(self):
        self.ManufactureName = "" 
        self.ManufactureContacs="0784663554"
        self.SuitPrice=100000
        self.SuitPreviousPrice=150000
        self.SuitDiscount=30
        self.SuitSize=42 
        self.SuitQuantity=10

    def GenerateStrings(self):
        self.PhoneNumber = random.randint(1000000,9999999)
        self.ManufactureName = NAMES[random.randint(1,(len(NAMES)-1))] + NOUNS[random.randint(1,(len(NOUNS)-1))]
        self.ManufactureContacs="+25078"+f"{self.PhoneNumber}"
        self.SuitSize=random.randint(42,50)
        self.SuitPrice=random.randint(70000,250000)
        self.SuitPreviousPrice=random.randint(50000,250000)
        self.SuitDiscount = random.randint(5,25)
        self.SuitQuantity = random.randint(1,10)
    
    def getJsonData(self):
        self.GenerateStrings()
        return [self.ManufactureName,
                self.ManufactureContacs,
                self.SuitPrice,
                self.SuitPreviousPrice,
                self.SuitDiscount,
                self.SuitSize,
                self.SuitQuantity]
    

def JsonFileGenerator():
    filePath = os.path.join(Path, "file.json")
    with open(filePath, "w") as f:
        f.write("{")
        for i in range(0,62):
            SuitJsonData = JsonDataGenerator().getJsonData()
            jsonString = f"""
            "ManufactureName":"{SuitJsonData[0]}",
            "ManufactureContacts":"{SuitJsonData[1]}",
            "SuitPrice":{SuitJsonData[2]},
            "SuitPreviousPrice":{SuitJsonData[3]},
            "SuitDiscount":{SuitJsonData[4]},
            "SuitSize":{SuitJsonData[5]},
            "SuitQuantity":{SuitJsonData[6]},
            "SuitImage":"/images/image{i}_500.jpg"\n"""

            SuitName = f"""
            "Suit{i}":"""
        
            f.write(SuitName)
            f.write("{")
            f.write(jsonString) 
            f.write("},\n")
        f.write("}")

def main():
    JsonFileGenerator()

if __name__=="__main__":
    main()
