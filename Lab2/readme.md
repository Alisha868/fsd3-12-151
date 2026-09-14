# File System (FS module)
fs module directly communicate with operating system rather than a common operation on a files or folder are

1. File-> write file, read file, append file
2. Folder-> mkdir/md,rmdir/rm,readdir
3. File metadata-> stat, lstat,rstat
4. Watch-> watch, unwatch
5. Stream->readstream(), writestream()

All functions are promise so it must be call with await keyword
If a function uses await keyword then function must be a async

## Appendfile
-- it is to add

## WriteFile
## CRUD project
c=create r=retrieve u=update d=delete assume we are making a cart related project

1. usercan add any project (id,name price,qty) into card
2. user can see all the items of card
3. user can remove item from card
4. user can also update quantity of project
5. all the item should be store after termination of project
6. .json =JavaScript Object Notation.