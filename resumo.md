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
    M18.2 - Criação de tarefas
        gruntfile.js:
            grunt.registerTask("olaGrunt", function() { //registra uma tarefa
                const done = this.async(); //indica ao Grunt para aguardar esta tarefa assíncrona
                setTimeout(function() {
                    console.log('Olá Grunt');
                }, 3000)
            })
            grunt.registerTask('default', ['olaGrunt']) //indica a tarefe default, separadas por vírgula
    M18.3 - Usando Grunt para compilar LESS