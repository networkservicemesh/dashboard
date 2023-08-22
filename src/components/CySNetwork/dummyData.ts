const parentStyle = { // style property overrides 
    'background-color': 'white',
    'border-color': 'dodgerblue',
    'border-width': '1px',
    'max-width': '40px'
  }

const tapIfStyle = {
    style: {
        'shape': 'rectangle',
        'background-color': '#707070',
        'border-color': '#707070',
        'border-width': '2px',
        'height': 10,
        'width': 10,
    }
}

const wgIfStyle = {
    style: {
        'shape': 'triangle',
        'background-color': '#707070',
        'border-color': '#707070',
        'border-width': '2px',
        'height': 10,
        'width': 10,
    }
}

const healthLinkStyle = {
    style: {
        'width': 2,
        'line-color': 'MediumSeaGreen',
        'target-arrow-color': 'MediumSeaGreen',
        'target-arrow-shape': 'vee',
  }
}

const brokenLinkStyle = {
    style: {
        'width': 2,
        'line-color': 'red',
        'target-arrow-color': 'red',
        'target-arrow-shape': 'vee',
  }
}

const nodes = [
    {
        data: { id: 'NSC-1', name: 'NSC-1' },
        style: parentStyle,
    },
    {
        data: { id: 'NSC-2', name: 'NSC-2' },
        style: parentStyle,
    },
    {
        data: { id: 'NSC-3', name: 'NSC-3' },
        style: parentStyle,
    },
    {
        data: { id: 'NSC-4', name: 'NSC-4' },
        style: parentStyle,
    },
    {
        data: { id: 'NSE-1', name: 'NSE-1' },
        style: parentStyle,
    },
    {
        data: { id: 'NSE-2', name: 'NSE-2' },
        style: parentStyle,
    },
    {
        data: { id: 'NSE-3', name: 'NSE-3' },
        style: parentStyle,
    },
    {
        data: { id: 'NSE-4', name: 'NSE-4' },
        style: parentStyle,
    },
    {
        data: { id: 'FWD-VPP-1', name: 'FWD-VPP-1' },
        style: parentStyle,
    },
    {
        data: { id: 'FWD-VPP-2', name: 'FWD-VPP-2' },
        style: parentStyle,
    },
    {
        data: { id: 'FWD-VPP-3', name: 'FWD-VPP-3' },
        style: parentStyle,
    },
    {
        data: { id: 'FWD-VPP-4', name: 'FWD-VPP-4' },
        style: parentStyle,
    },
    {
        data: { id: 'NSC-1-tap0', name: 'tap0', parent: 'NSC-1' },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSC-2-tap1', name: 'tap1', parent: 'NSC-2'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSC-3-tap0', name: 'tap0', parent: 'NSC-3'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSC-4-tap2', name: 'tap2', parent: 'NSC-4'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSE-1-tap0', name: 'tap0', parent: 'NSE-1' },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSE-2-tap1', name: 'tap1', parent: 'NSE-2'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSE-3-tap0', name: 'tap0', parent: 'NSE-3'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'NSE-4-tap1', name: 'tap1', parent: 'NSE-4'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-1-tap0', name: 'tap0', parent: 'FWD-VPP-1'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-1-tap1', name: 'tap1', parent: 'FWD-VPP-1'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-1-wg0', name: 'wg0', parent: 'FWD-VPP-1'  },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-1-wg1', name: 'wg1', parent: 'FWD-VPP-1'  },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-2-tap0', name: 'tap0', parent: 'FWD-VPP-2'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-2-wg0', name: 'wg0', parent: 'FWD-VPP-2'  },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-3-tap0', name: 'tap0', parent: 'FWD-VPP-3'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-3-tap1', name: 'tap1', parent: 'FWD-VPP-3'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-3-tap2', name: 'tap2', parent: 'FWD-VPP-3'  },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-3-wg0', name: 'wg0', parent: 'FWD-VPP-3'  },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-3-wg1', name: 'wg1', parent: 'FWD-VPP-3'  },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-3-wg2', name: 'wg2', parent: 'FWD-VPP-3'  },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-4-tap0', name: 'tap0', parent: 'FWD-VPP-4' },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-4-tap1', name: 'tap1', parent: 'FWD-VPP-4' },
        ...tapIfStyle,
    },
    {
        data: { id: 'FWD-VPP-4-wg0', name: 'wg0', parent: 'FWD-VPP-4' },
        ...wgIfStyle,
    },
    {
        data: { id: 'FWD-VPP-4-wg1', name: 'wg1', parent: 'FWD-VPP-4' },
        ...wgIfStyle,
    },
];

const edges = [
    {
        data: { id: 'NSC-1-tap0-FWD-VPP-1-tap0', source: 'NSC-1-tap0', target: 'FWD-VPP-1-tap0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'NSC-2-tap1-FWD-VPP-1-tap1', source: 'NSC-2-tap1', target: 'FWD-VPP-1-tap1' },
        ...brokenLinkStyle,
    },
    {
        data: { id: 'NSC-3-tap0-FWD-VPP-2-tap0', source: 'NSC-3-tap0', target: 'FWD-VPP-2-tap0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-1-tap0-FWD-VPP-1-wg0', source: 'FWD-VPP-1-tap0', target: 'FWD-VPP-1-wg0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-1-tap1-FWD-VPP-1-wg1', source: 'FWD-VPP-1-tap1', target: 'FWD-VPP-1-wg1' },
        ...brokenLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-2-tap0-FWD-VPP-2-wg0', source: 'FWD-VPP-2-tap0', target: 'FWD-VPP-2-wg0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-1-wg0-FWD-VPP-3-wg0', source: 'FWD-VPP-1-wg0', target: 'FWD-VPP-3-wg0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-1-wg1-FWD-VPP-3-wg1', source: 'FWD-VPP-1-wg1', target: 'FWD-VPP-3-wg1' },
        ...brokenLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-3-wg2-FWD-VPP-4-wg1', source: 'FWD-VPP-3-wg2', target: 'FWD-VPP-4-wg1' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-2-wg0-FWD-VPP-4-wg0', source: 'FWD-VPP-2-wg0', target: 'FWD-VPP-4-wg0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-3-wg0-FWD-VPP-3-tap0', source: 'FWD-VPP-3-wg0', target: 'FWD-VPP-3-tap0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-3-wg1-FWD-VPP-3-tap1', source: 'FWD-VPP-3-wg1', target: 'FWD-VPP-3-tap1' },
        ...brokenLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-3-tap2-FWD-VPP-3-wg2', source: 'FWD-VPP-3-tap2', target: 'FWD-VPP-3-wg2' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-4-wg0-FWD-VPP-4-tap0', source: 'FWD-VPP-4-wg0', target: 'FWD-VPP-4-tap0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-4-wg1-FWD-VPP-4-tap1', source: 'FWD-VPP-4-wg1', target: 'FWD-VPP-4-tap1' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-3-tap0-NSE-1-tap0', source: 'FWD-VPP-3-tap0', target: 'NSE-1-tap0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-3-tap1-NSE-2-tap1', source: 'FWD-VPP-3-tap1', target: 'NSE-2-tap1' },
        ...brokenLinkStyle,
    },
    {
        data: { id: 'NSC-4-tap2-FWD-VPP-3-tap2', source: 'NSC-4-tap2', target: 'FWD-VPP-3-tap2' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-4-tap0-NSE-3-tap0', source: 'FWD-VPP-4-tap0', target: 'NSE-3-tap0' },
        ...healthLinkStyle,
    },
    {
        data: { id: 'FWD-VPP-4-tap1-NSE-4-tap1', source: 'FWD-VPP-4-tap1', target: 'NSE-4-tap1' },
        ...healthLinkStyle,
    },
];

export const elements = [ ...nodes, ...edges ];

export const extraNodesData = [
    {
        id: 'NSC-1',
        type: 'client',
        ipContext: {
			srcIpAddrs: ["172.16.1.101/32"],
			dstIpAddrs: ["172.16.1.100/32"],
			srcRoutes: [{"prefix":"172.16.1.100/32"}],
			dstRoutes:[{"prefix":"172.16.1.101/32"}],
			excludedPrefixes:["10.96.0.0/16","10.244.0.0/16"]
        },
        nodeName: "kind-worker",
		podName: "alpine",
        ifName: "nsm-1",
        ifType: "KERNEL",
        networkService: "kernel2ip2kernel",
        networkServiceEndpointName: "nse-kernel-68bf9687d5-c2fxh",
    },
    {
        id: 'FWD-VPP-1',
        type: 'forwarder',
		ip_context :{
            excluded_prefixes: ["10.96.0.0/16","10.244.0.0/16"]
        },
        nodeName: "kind-worker",
        networkServiceEndpointName: "nse-kernel-f69d545cc-qztxv",
    }
];
