info=$1
if ["$info" = ""];
then info=":pencil: update content"
fi
git add .
git commit -m "$info"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/svipkid_rsa
git pull -f origin master
git push -f origin master