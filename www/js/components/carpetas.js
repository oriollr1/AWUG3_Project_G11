const CarpetasTemplate = {props: [], 
                          data: () => ({
        radio: false,
        active: false,
        value: null,
        primary: [
                  'Orange',
                  'Apple',
                  'Pineapple'
                ],
        accent: [
                  'Cat',
                  'Dog',
                  'Rabbit'
                ]
    }),
        methods: {
              onConfirm () {
                this.value = 'Agreed'
              },
              onCancel () {
                this.value = 'Disagreed'
              }
        },
        template:
            `<div id="app">
                <div>
                    <md-list class="md-double-line">
                        <md-subheader>Carpetas</md-subheader>

                        <md-list-item @click="goToDocList()">
                            <md-icon class="md-primary">folder</md-icon>

                            <div class="md-list-item-text">
                                <span>Carpeta 1</span>
                                <span>Modificado 14 de sept. 2017</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>more_vert</md-icon>
                            </md-button>
                        </md-list-item>

                        <md-divider></md-divider>

                        <md-list-item @click="goToDocList()">
                            <md-icon class="md-primary">folder</md-icon>

                            <div class="md-list-item-text">
                                <span>Carpeta 2</span>
                                <span>Modificado 21 de sept. 2017</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>more_vert</md-icon>
                            </md-button>
                        </md-list-item>

                        <md-divider></md-divider>

                        <md-list-item @click="goToDocList()">
                            <md-icon class="md-primary">folder</md-icon>

                            <div class="md-list-item-text">
                                <span>Carpeta 3</span>
                                <span>Modificado 1 de oct. 2017</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>more_vert</md-icon>
                            </md-button>
                        </md-list-item>

                </div>

            </div>`
                     };