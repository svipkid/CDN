info=$1
if ["$info" = ""];
then info=":pencil: update content"
fi
git add .
git commit -m "$info"
git pull -f origin master
git push -f origin master