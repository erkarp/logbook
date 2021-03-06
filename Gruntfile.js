module.exports = function(grunt) {
	
	grunt.config.init({
		ftp_push: {
			target: {
				options: {
						host: "wdsclient.com",
						dest: "/public_html/em/sighs/",
						authKey: "server",
				},
				files: [{
					expand: true,
					cwd: '.',
					src: [
						'index.html',
						'sighs.txt'
					]
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-ftp-push');
	grunt.registerTask('push', ['ftp_push']);
};
