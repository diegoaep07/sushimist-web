echo "Downloading Content..."
curl -L -o sushimist-menu-temp.zip https://github.com/sushimist-menu/sushimist_menu/archive/refs/heads/main.zip

echo "Extracting Content..."
unzip sushimist-menu-temp.zip -d temp-menu-extracted 

echo "Contents of extracted directory:"
ls 

cp -r temp-menu-extracted/sushimist_menu-main/menu_data/* src/content/menu_data

rm -rf src/assets/menu/*
cp -r temp-menu-extracted/sushimist_menu-main/assets/menu/* src/assets/menu/ 
cp temp-menu-extracted/sushimist_menu-main/config.ts src/
echo "Cleaning up temporary content files..."
rm -rf ./temp-menu-extracted 
rm sushimist-menu-temp.zip 
echo "Starting main build command..." 
npm run build
