source "https://rubygems.org"
ruby RUBY_VERSION

# Ensure the proper Jekyll version is running
gem "jekyll", "~>3.8.5"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# For Auto Regeneration on Windows add Windows Directory Monitor
gem "wdm", "~> 0.1.0" if Gem.win_platform?

group :jekyll_plugins do
  # vendor prefixing in stylesheet
  gem "jekyll-autoprefixer"
  # compress text files
  gem "jekyll-gzip"
end
