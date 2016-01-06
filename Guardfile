guard 'jekyll-plus', serve: true do
  watch /.*/
  ignore /^_site/
end

guard :livereload do
  watch /.*/
end

guard :pow, restart_on_start: true, restart_on_reload: false do
   watch('.powrc')
   watch('.powenv')
   watch('Gemfile')
   watch('Gemfile.lock')
   watch('_config.yml')
   watch(%r{config\.(rb|ru)})
end

