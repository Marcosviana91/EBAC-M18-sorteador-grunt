M18 - Automação de tarefas com Grunt
    M18.1 - Instalação
        terminal:
            npm i -g grunt-cli
            npm init
            npm i --save-dev grunt
        package.json: //criar script
            "grunt": "grunt",
        gruntfile.js //criar este arquivo
            module.exports = function(grunt) {
                grunt.initConfig({
                    pkg: grunt.file.readJSON("package.json"),
                })
            }
    M18.2 - 
