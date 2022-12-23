// var Matter = require('matter-js');
import { Matter } from 'matter-js';
import RenderDom from './render/RenderDom.js';
import DomBody from './body/DomBody.js';
import DomBodies from './factory/DomBodies.js';
import DomMouseConstraint from './constraint/DomMouseConstraint.js';
import Engine from './core/Engine.js';

var MatterKrijuarPlugin = {
    name: 'matter-krijuar-plugin',
    version: '1.0.0',
    for: 'matter-js@^0.18.0',
    install: function(matter){
        MatterKrijuarPlugin.installRenderDom(matter);
        MatterKrijuarPlugin.installDomBody(matter);
        MatterKrijuarPlugin.installDomBodies(matter); // Depends on DomBody
        MatterKrijuarPlugin.installDomMouseConstraint(matter);
        MatterKrijuarPlugin.installEngine(matter);
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

Matter.Plugin.register(MatterKrijuarPlugin);
// Plugin.register(MatterDomPlugin);

const _MatterKrijuarPlugin = MatterKrijuarPlugin;
export { _MatterKrijuarPlugin as MatterKrijuarPlugin };