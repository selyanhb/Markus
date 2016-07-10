require 'spec_helper'

RSpec.describe CriteriaController, type: :controller do

  describe "Using Flexible criteria" do

    describe 'An unauthenticated and unauthorized user doing a GET' do
      context '#update_positions' do
        it 'should respond with redirect' do
          get :update_positions, assignment_id: 1
          is_expected.to respond_with :redirect
        end
      end
    end

    describe 'An authenticated and authorized admin doing a POST' do
      before(:each) do
        @admin = create(:admin, user_name: 'olm_admin')
        @assignment = create(:flexible_assignment)
        @criterion = create(:flexible_criterion,
                            assignment: @assignment,
                            position: 1,
                            name: 'criterion1',
                            description: 'description1, for criterion 1')
        @criterion2 = create(:flexible_criterion,
                             assignment: @assignment,
                             position: 2,
                             name: 'criterion2',
                             description: 'description2, "with quotes"')
        @criterion3 = create(:flexible_criterion,
                             assignment: @assignment,
                             position: 3,
                             name: 'criterion3',
                             description: 'description3!',
                             max_mark: 1.6)
      end

      it 'should be able to update_positions' do
        post_as @admin,
                :update_positions,
                format: :js,
                criterion: [@criterion2.id,
                            @criterion.id],
                assignment_id: @assignment.id
        is_expected.to render_template('criteria/update_positions')
        is_expected.to respond_with(:success)

        c1 = FlexibleCriterion.find(@criterion.id)
        expect(c1.position).to eql(2)
        c2 = FlexibleCriterion.find(@criterion2.id)
        expect(c2.position).to eql(1)
      end
    end
  end
end
