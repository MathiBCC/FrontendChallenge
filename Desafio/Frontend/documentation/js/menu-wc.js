'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">desafio documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-55cb9ce86f30726eb8cb813074455bc27537e680c7e3d8a307d535008d326ee13c5fef058c080c7fc0de2584268ffe3a52f45c039e10f67d6f09ad52a67fd8ca"' : 'data-target="#xs-components-links-module-AppModule-55cb9ce86f30726eb8cb813074455bc27537e680c7e3d8a307d535008d326ee13c5fef058c080c7fc0de2584268ffe3a52f45c039e10f67d6f09ad52a67fd8ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-55cb9ce86f30726eb8cb813074455bc27537e680c7e3d8a307d535008d326ee13c5fef058c080c7fc0de2584268ffe3a52f45c039e10f67d6f09ad52a67fd8ca"' :
                                            'id="xs-components-links-module-AppModule-55cb9ce86f30726eb8cb813074455bc27537e680c7e3d8a307d535008d326ee13c5fef058c080c7fc0de2584268ffe3a52f45c039e10f67d6f09ad52a67fd8ca"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' : 'data-target="#xs-components-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' :
                                            'id="xs-components-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' : 'data-target="#xs-injectables-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' :
                                        'id="xs-injectables-links-module-AuthModule-3f7af770d66918879938e0b02a53463bd374de67cab14d04ee5fdd21e2284c192bd404931a658290778e8c674d1d4ddaeefa5ad02b223c18823be0943fdd11fa"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-ad6613d6d2d20efd757b61df53da9aea4358301d4e8b04cb6e592761a03d7565fc090482c26ead8ed5da999c719db510195ef6b21283a9b275360df7d6b4db56"' : 'data-target="#xs-components-links-module-ComponentsModule-ad6613d6d2d20efd757b61df53da9aea4358301d4e8b04cb6e592761a03d7565fc090482c26ead8ed5da999c719db510195ef6b21283a9b275360df7d6b4db56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-ad6613d6d2d20efd757b61df53da9aea4358301d4e8b04cb6e592761a03d7565fc090482c26ead8ed5da999c719db510195ef6b21283a9b275360df7d6b4db56"' :
                                            'id="xs-components-links-module-ComponentsModule-ad6613d6d2d20efd757b61df53da9aea4358301d4e8b04cb6e592761a03d7565fc090482c26ead8ed5da999c719db510195ef6b21283a9b275360df7d6b4db56"' }>
                                            <li class="link">
                                                <a href="components/NgxSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HttpCodesModule.html" data-type="entity-link" >HttpCodesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HttpCodesModule-5df51f6b63759031c92402fc58e912016cbfb0784ab09261e8a025117b52ce8129ec408a5eb56a4e264707c4ba482d0b178c4b1b13b488a81543acfc724db523"' : 'data-target="#xs-components-links-module-HttpCodesModule-5df51f6b63759031c92402fc58e912016cbfb0784ab09261e8a025117b52ce8129ec408a5eb56a4e264707c4ba482d0b178c4b1b13b488a81543acfc724db523"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HttpCodesModule-5df51f6b63759031c92402fc58e912016cbfb0784ab09261e8a025117b52ce8129ec408a5eb56a4e264707c4ba482d0b178c4b1b13b488a81543acfc724db523"' :
                                            'id="xs-components-links-module-HttpCodesModule-5df51f6b63759031c92402fc58e912016cbfb0784ab09261e8a025117b52ce8129ec408a5eb56a4e264707c4ba482d0b178c4b1b13b488a81543acfc724db523"' }>
                                            <li class="link">
                                                <a href="components/ForbiddenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForbiddenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HttpCodesRoutingModule.html" data-type="entity-link" >HttpCodesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-cc69a27f126bc2f47baa75ee5f94ba3e82ddca48c0ebbf1e42b9489e134da1e980f4b0cf2be5b4e4d7aed4feb485ad67dc4e90638aa8a5ce37405dd01724a07b"' : 'data-target="#xs-components-links-module-LayoutModule-cc69a27f126bc2f47baa75ee5f94ba3e82ddca48c0ebbf1e42b9489e134da1e980f4b0cf2be5b4e4d7aed4feb485ad67dc4e90638aa8a5ce37405dd01724a07b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-cc69a27f126bc2f47baa75ee5f94ba3e82ddca48c0ebbf1e42b9489e134da1e980f4b0cf2be5b4e4d7aed4feb485ad67dc4e90638aa8a5ce37405dd01724a07b"' :
                                            'id="xs-components-links-module-LayoutModule-cc69a27f126bc2f47baa75ee5f94ba3e82ddca48c0ebbf1e42b9489e134da1e980f4b0cf2be5b4e4d7aed4feb485ad67dc4e90638aa8a5ce37405dd01724a07b"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TournamentModule.html" data-type="entity-link" >TournamentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' : 'data-target="#xs-components-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' :
                                            'id="xs-components-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' }>
                                            <li class="link">
                                                <a href="components/TournamentCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TournamentEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TournamentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TournamentManagementMatchesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentManagementMatchesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' : 'data-target="#xs-injectables-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' :
                                        'id="xs-injectables-links-module-TournamentModule-542f52af401520040c40f2761633b122219455bad40f372f536df2b6dd701b96bdc7de8f46a283235f8af470f469f08fd8ef6295d82d36133d9f84dc077778d7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EloService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EloService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TournamentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TournamentRoutingModule.html" data-type="entity-link" >TournamentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' : 'data-target="#xs-components-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' :
                                            'id="xs-components-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' }>
                                            <li class="link">
                                                <a href="components/UserGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserGeneralComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' : 'data-target="#xs-injectables-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' :
                                        'id="xs-injectables-links-module-UserModule-685f4a716f0a8641278d5b26239a4eaddf1ab618534d35f1d52edc584f724fc05f5f60d7b415a40ba9de442d5210e7b6f9b7d09bac4c5132fb838689efab9f99"' }>
                                        <li class="link">
                                            <a href="injectables/EloService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EloService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeamService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TournamentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TournamentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Datetime.html" data-type="entity-link" >Datetime</a>
                            </li>
                            <li class="link">
                                <a href="classes/Elo.html" data-type="entity-link" >Elo</a>
                            </li>
                            <li class="link">
                                <a href="classes/InfoGeneralUser.html" data-type="entity-link" >InfoGeneralUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Match.html" data-type="entity-link" >Match</a>
                            </li>
                            <li class="link">
                                <a href="classes/Properties.html" data-type="entity-link" >Properties</a>
                            </li>
                            <li class="link">
                                <a href="classes/Team.html" data-type="entity-link" >Team</a>
                            </li>
                            <li class="link">
                                <a href="classes/Token.html" data-type="entity-link" >Token</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tournament.html" data-type="entity-link" >Tournament</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserForRegister.html" data-type="entity-link" >UserForRegister</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatatableService.html" data-type="entity-link" >DatatableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EloService.html" data-type="entity-link" >EloService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtService.html" data-type="entity-link" >JwtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamService.html" data-type="entity-link" >TeamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TournamentService.html" data-type="entity-link" >TournamentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BaseGuard.html" data-type="entity-link" >BaseGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IApiService.html" data-type="entity-link" >IApiService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IElo.html" data-type="entity-link" >IElo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMatch.html" data-type="entity-link" >IMatch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITeam.html" data-type="entity-link" >ITeam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITournament.html" data-type="entity-link" >ITournament</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserForRegister.html" data-type="entity-link" >IUserForRegister</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});