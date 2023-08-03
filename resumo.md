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
                development: {//task deseenvolvimento
                    files: {
                        'main.css': 'main.less'
                    }
                },
                production: {//task produção
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
        gruntfile.js:
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
        terminal:
            npm i --save-dev grunt-concurrent
        gruntfile.js:
            concurrent: { //incluir após o pkg
                target: ['less', 'sass'] // aqui vão as tarefas
            }
            grunt.loadNpmTasks('grunt-concurrent'); //carregar o concurrent antes de registrar as tarefas
            grunt.registerTask('default', ['concurrent']); // aqui vai apenas a tarefa 'concurrent'
    M18.5 - Iniciando um projeto com o Grunt
        package.json:
            "build": "grunt build", //adicionar este script
        gruntfile.js:
            grunt.registerTask('build', ['less:production']);
    M18.6 - Grunt watch
        terminal:
            npm i --save-dev grunt-contrib-watch
        guntfile.js:
            watch: {
                less: {
                    files: ['src/styles/**/*.less'],
                    tasks: ['less:development']
                }
            }
            grunt.loadNpmTasks('grunt-contrib-watch');
            grunt.registerTask('default', ['watch']);
    M18.7 - Comprimindo HTML com o Grunt
        terminal:
            npm i --save-dev grunt-replace
        gruntfile.js:
            replace: {
                dev: {
                    options: {
                        patterns: [
                            {
                                match: 'ENDERECO_DO_CSS',
                                replacement: './styles/main.css'
                            }
                        ]
                    },
                    files: [
                        {
                            expand: true,
                            flatten: true,
                            src: 'src/index.html',
                            dest: 'dev/'
                        }
                    ]
                },
                dist: {
                    options: {
                        patterns: [
                            {
                                match: 'ENDERECO_DO_CSS',
                                replacement: './styles/main.min.css'
                            }
                        ]
                    },
                    files: [
                        {
                            expand: true,
                            flatten: true,
                            src: 'prebuild/index.html',
                            dest: 'dist/'
                        }
                    ]
                }
            },
            grunt.loadNpmTasks('grunt-replace');

        terminal:
            npm i --save-dev grunt-contrib-htmlmin
        gruntfile.js:
            htmlmin: {
                dist: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'prebuild/index.html': 'src/index.html'
                    }
                }
            },
            grunt.loadNpmTasks('grunt-contrib-htmlmin');

        terminal:
            npm i --save-dev grunt-contrib-clean
        gruntfile.js:
            clean: ['prebuild']
            grunt.loadNpmTasks('grunt-contrib-clean');

    M18.8 - JavaScript Math
    M18.9 - Comprimindo JavaScript com o Grunt
        terminal:
            npm i -D grunt-contrib-uglify
