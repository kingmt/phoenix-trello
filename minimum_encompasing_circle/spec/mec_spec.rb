require 'mec'

describe Mec do
  context '2 points diagonal' do
    let(:point_1) { [1,1] }
    let(:point_2) { [9,9] }
    let(:result) { Mec.find_circle [point_1, point_2] }
    let(:circle_center) { result.first }
    let(:radius) { result.last }

    it { expect(circle_center).to eq([5,5]) }
    it { expect(radius).to eq(5.66) }
  end

  context '2 point horizontal' do
    let(:point_1) { [1,1] }
    let(:point_2) { [1,9] }
    let(:result) { Mec.find_circle [point_1, point_2] }
    let(:circle_center) { result.first }
    let(:radius) { result.last }

    it { expect(circle_center).to eq([1,5]) }
    it { expect(radius).to eq(4) }
  end

end
