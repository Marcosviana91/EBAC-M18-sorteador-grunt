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
        terminal:
            npm i --save-dev grunt-contrib-less //instala o plugin do LESS
        gruntfile.js:
            less: { //incluir após o pkg
                development: {
                    files: {
                        'main.css': 'main.less'
                    }
                },
                production: {
                    options: {
                        compress: true,
                    },
                    files: {
                        'main.min.css': 'main.less'
                    }
                }
            }
            grunt.loadNpmTasks('grunt-contrib-less'); //carregar o less antes de registrar as tarefas
        terminal:
            npm i --save-dev grunt-contrib-sass
        gruntfile.js
            sass: { //incluir após o pkg
                dist: {
                    options: {
                        style: 'compressed',
                    },
                    files: {
                        'main2.css': 'main.scss'
                    }
                }
            }
            grunt.loadNpmTasks('grunt-contrib-sass'); //carregar o sass antes de registrar as tarefas
            grunt.registerTask('default', ['less', 'sass']);
    M18.4 -Executando tarefas de forma paralela
        terminal: npm i --save-dev grunt-concurrent
