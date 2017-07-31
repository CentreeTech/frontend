import os
import shutil, errno
from os.path import isfile, join
import sys

def create_cmp_file(old_file, new_file, name):
	old = open(template_dir + old_file, 'r')
	new = open(components_dir +  name + '/' + new_file, 'w')
	for line in old:
		new.write(line.replace('RENAME', name))
	new.flush()
	old.close()
	new.close()

cwd = os.getcwd()
# print(cwd)
if 'src' in os.listdir(cwd):
	components_dir = cwd + './src/components/'
	template_dir = cwd + './tools/templates/Component/'
else:
	components_dir = cwd + '../components/'
	template_dir = cwd + './templates/Component/'


name = sys.argv[1] if len(sys.argv) > 1 else input('Input component name: ')
os.mkdir(components_dir + name)
create_cmp_file('Component.js', name + '.js', name)
create_cmp_file('Component.css', name + '.css', name)
create_cmp_file('package.json', 'package.json', name)
