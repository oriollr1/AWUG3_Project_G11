const DocListTemplate = {props: [], 
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
                        <md-subheader>Documentos</md-subheader>

                        <md-list-item @click="goToDocList()">
                            <md-icon class="md-primary">insert_drive_file</md-icon>

                            <div class="md-list-item-text">
                                <span>Documento 1</span>
                                <span>Modificado 14 de sept. 2017</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>more_vert</md-icon>
                            </md-button>
                        </md-list-item>

                        <md-divider></md-divider>

                        <md-list-item>
                            <md-icon class="md-primary">insert_drive_file</md-icon>

                            <div class="md-list-item-text">
                                <span>Documento 2</span>
                                <span>Modificado 21 de sept. 2017</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>more_vert</md-icon>
                            </md-button>
                        </md-list-item>

                        <md-divider></md-divider>

                        <md-list-item>
                            <md-icon class="md-primary">insert_drive_file</md-icon>

                            <div class="md-list-item-text">
                                <span>Documento 3</span>
                                <span>Modificado 1 de oct. 2017</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>more_vert</md-icon>
                            </md-button>
                        </md-list-item>

                </div>

            </div>`
                     };