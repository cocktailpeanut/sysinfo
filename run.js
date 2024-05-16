module.exports = {
  run: [
    // Delete this step if your project does not use torch
    {
      method: "log",
      params: {
        "json2": "{{kernel.sysinfo}}"
      }
    },
    {
      when: "{{platform==='darwin'}}",
      method: "log",
      params: {
        "text": "{{kernel.sysinfo.osInfo.release.startsWith('14') ? 'sonoma!' : 'not sonoma!'}}"
      }
    },
    {
      when: "{{platform==='win32'}}",
      method: "log",
      params: {
        "text": "windows version {{kernel.sysinfo.osInfo.release}}"
      }
    }
  ]
}
