guard 'jekyll-plus', serve: true, rack_config: 'config.ru' do
  watch /.*/
  watch /^_includes/
  ignore /^_site/
end

guard :compass, compile_on_start: true do
  watch(%r{_scss/.+\.scss})
end

guard :livereload, host: 'code-guide.dev' do
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

