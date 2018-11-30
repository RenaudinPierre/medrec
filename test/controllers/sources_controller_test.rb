require 'test_helper'

class SourcesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get sources_create_url
    assert_response :success
  end

end
