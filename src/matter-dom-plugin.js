// var Matter = require('matter-js');
import { Matter } from 'matter-js';
import RenderDom from './render/RenderDom.js';
import DomBody from './body/DomBody.js';
import DomBodies from './factory/DomBodies.js';
import DomMouseConstraint from './constraint/DomMouseConstraint.js';
import Engine from './core/Engine.js';

var MatterDomPlugin = {
    name: 'matter-dom-plugin',
    version: '1.0.0',
    for: 'matter-js@^0.18.0',
    install: function(matter){
        MatterDomPlugin.installRenderDom(matter);
        MatterDomPlugin.installDomBody(matter);
        MatterDomPlugin.installDomBodies(matter); // Depends on DomBody
        MatterDomPlugin.installDomMouseConstraint(matter);
        MatterDomPlugin.installEngine(matter);
    },
    installRenderDom: function(matter){
        console.log("Installing RenderDom module.");
        matter.RenderDom = RenderDom(matter);
    },
    installDomBodies: function(matter){
        console.log("Installing DomBodies module.");
        matter.DomBodies = DomBodies(matter);
    },
    installDomMouseConstraint: function(matter){
        console.log("Installing DomMouseConstraint.");
        matter.DomMouseConstraint = DomMouseConstraint(matter);
    },
    installDomBody: function(matter){
        console.log("Installing DomBody updates.");
        matter.DomBody = DomBody(matter);
    },
    installEngine: function(matter){
        console.log("Patching Engine.");
        Engine(matter);
    }
};

Matter.Plugin.register(MatterDomPlugin);
// Plugin.register(MatterDomPlugin);

const _MatterDomPlugin = MatterDomPlugin;
export { _MatterDomPlugin as MatterDomPlugin };